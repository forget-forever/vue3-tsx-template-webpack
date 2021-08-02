import message from "element-plus/lib/el-message/src/message";

type IParams = {
  current: number;
  pageSize: number;
};

type IPageBaseMsg = Record<'current' | 'pageSize' | 'total' | 'totalPage', number>;
// 列表页的类型
export interface IPageList<T = any> extends IPageBaseMsg {
  list: T[];
}
export default class Infinite<P, T> {
  request: (params: P & IParams) => Promise<IPageList<T>>;
  params: P & IParams;
  loading: boolean;
  finish: boolean;
  status: 'pedding' | 'destory';
  showLoadingWarn: boolean;

  /**
   * 无限滚动数据集中处理的对象
   * @param params 初始的时候的参数，类型跟传入的第一个泛型一致
   * @param request 请求的函数，类似于 (params) => request('...', { params })
   * @param pageSize 一页的条数，默认是一页20条
   */
  constructor(params: P, request: (params: P) => Promise<IPageList<T>>, pageSize: number = 20) {
    this.request = request;
    this.params = { ...params, current: 1, pageSize };
    this.showLoadingWarn = true;
    this.loading = false;
    this.finish = false;
    this.status = 'pedding';
  }
  /**
   * 获取下一页的数据
   * @param params 发起请求的参数，类型跟传入的第一个泛型一致，可选参数，如果不传会使用上次请求传过来的并且成功请求到数据的
   * @param refresh 是否是重新初始化，置为true之后请求的页数会变成1，相当于重新加载
   * @returns 获取到的数据
   */
  next(params: P = this.params, refresh?: boolean) {
    return this.getData('next', params, refresh);
  }
  /**
   * 获取上一页的数据
   * @param params 发起请求的参数，类型跟传入的第一个泛型一致，可选参数，如果不传会使用上次请求传过来的并且成功请求到数据的
   * @param refresh 是否是重新初始化，置为true之后请求的页数会变成1，相当于重新加载
   * @returns 获取到的数据
   */
  pre(params: P = this.params, refresh?: boolean) {
    return this.getData('pre', params, refresh);
  }
  /**
   * 重新加载
   * @param params 发起请求的参数，类型跟传入的第一个泛型一致，可选参数，如果不传会使用上次请求传过来的并且成功请求到数据的
   * @returns 获取到的数据
   */
  refresh(params: P = this.params) {
    return this.next(params, true);
  }
  /**
   * 设置参数，可以通过这个方法，修改指定的参数
   * @param params 所要修改的参数字段
   */
  setParams(params: Partial<P>) {
    const oldParams = { ...this.params };
    this.params = { ...oldParams, ...params };
  }
  /**
   * 销毁对象，防止组件销毁后，数据请求出来无处渲染
   */
  destory() {
    this.status = 'destory';
  }

  private async getData(mode: 'next' | 'pre', params: P, refresh?: boolean) {
    if (this.loading) {
      if (this.showLoadingWarn) message.warning('加载中')
      return Promise.reject(new Error('loading'));
    }
    this.loading = true;
    try {
      let { current } = this.params;
      const { pageSize } = this.params;
      if (refresh) current = 1;
      const res = await this.request({ ...params, current, pageSize });
      this.loading = false;
      switch (mode) {
        case 'next':
          this.params = { ...params, current: current + 1, pageSize };
          break;
        case 'pre':
          this.params = { ...params, current: current - 1, pageSize };
          break;
        default:
      }
      if (res.list.length < pageSize) {
        this.finish = true;
      } else {
        this.finish = false;
      }
      if (this.status === 'destory') return Promise.reject(new Error('destroyed'));
      return res;
    } catch (error) {
      this.loading = false;
      return Promise.reject(error);
    }
  }
}
