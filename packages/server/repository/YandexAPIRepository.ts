import axios from 'axios'

export class YandexAPIRepository {
  constructor(private _cookieHeader: string | undefined,
    private apiURL: string) { }

  async getCurrent(): Promise<any> {
    const { data } = await axios.get(`${this.apiURL}/auth/user`, {
      headers: {
        cookie: this._cookieHeader,
      },
    })
    return {
      ...data,
      xss: "</script><script>alert('pwned')</script><!--",
    }
  }
}
