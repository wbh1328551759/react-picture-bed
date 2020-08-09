import { observable, action} from 'mobx'
import { Auth } from '../models'

class AuthStore{
  @observable values = {
    username: '',
    password: ''
  }

  @action setUsername(username){
    this.values.username = username
  }

  @action setPassword(password){
    this.values.password = password
  }

  @action login(){
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password).then(user => {
        resolve(user)
      }).catch(error => {
        reject(error)
      })
    })
  }

  @action register(){
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then(user => {
          resolve(user)
        }).catch(error => {
          console.log('错误')
          reject(error)
      })
    })
  }

  @action logout(){
    Auth.logout()
  }
}

export default new AuthStore()