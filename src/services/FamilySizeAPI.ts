import axios from 'axios'

export default class FamilySizeAPI {
  public async getMenu (): Promise<any> {
    const res = await axios.get('https://familysize-servicio-web.herokuapp.com/menu')
    return res.data
  }

  public async getMenuItem (id: number): Promise<any> {
    const res = await axios.get(`https://familysize-servicio-web.herokuapp.com/menu/${id}`)
    return res.data
  }

  public async getMenuItemPicture (id: number): Promise<any> {
    const res = await axios.get(`https://familysize-servicio-web.herokuapp.com/menu/${id}/picture`)
    return res.data
  }
}
