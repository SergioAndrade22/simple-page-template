import axios from 'axios'

export default class FamilySizeAPI {
  public async getMenu (): Promise<[]> {
    const res = await axios.get(`${process.env.familySizeURL}/menu`)
    return res.data
  }

  public async getMenuItem (id: number): Promise<[]> {
    const res = await axios.get(`${process.env.familySizeURL}/menu/${id}`)
    return res.data
  }

  public async getMenuItemPicture (id: number): Promise<[]> {
    const res = await axios.get(`${process.env.familySizeURL}/menu/${id}/picture`)
    return res.data
  }
}
