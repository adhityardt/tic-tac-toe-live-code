import {observable, action} from 'mobx'

class MobXStore {
  @observable state = {
    board: ['', '', '', '', '', '', '', '', ''],
    player: 'X'
  }
  
  @action
  setStatus (payload) {
    this.state.player = payload
  }

}

export default new MobXStore()