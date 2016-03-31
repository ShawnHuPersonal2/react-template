import {Header} from './';
require('styles/App.styl');
import {
  Component
} from 'react';
class App extends Component {
  render() {

    <Header/>;
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default App;
