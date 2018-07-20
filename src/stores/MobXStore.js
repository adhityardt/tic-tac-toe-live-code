import {observable, action} from 'mobx'

class MobXStore {
  @observable state = {
    board: ['', '', '', '', '', '', '', '', ''],
    counter: 1,
    player: 'X'
  }
  
  @action
  setBoard (payload) {
    this.state.board[payload] = this.state.player
  }
}

export default new MobXStore()