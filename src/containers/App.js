import {Header} from './';
import { RouteTransition } from 'react-router-transition';
import {
  Component
} from 'react';
require('styles/App.styl');
class App extends Component {
  render() {

    <Header/>;
    return (
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0 }}
          atActive={{opacity: 1 }}
          mapStyles={styles => {
            return {
              opacity: styles.opacity
            };
          }}
          >
          <div style={{position:'absolute', width:'100%', height: '100%'}}>
            {this.props.children}
          </div>
        </RouteTransition>
    );
  }
}
export default App;
