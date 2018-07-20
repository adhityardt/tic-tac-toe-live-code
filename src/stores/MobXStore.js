import {observable, action} from 'mobx'

class MobXStore {
  @observable state = {
    board: ['', '', '', '', '', '', '', '', ''],
    counter: 1
  }
  
  @action
  setBoard (payload) {
    if (this.state.counter%2 !== 0) {
      this.state.board[payload] = 'X'
    } else {
      this.state.board[payload] = 'O'
    }
    this.state.counter++
  }
}

export default new MobXStore()