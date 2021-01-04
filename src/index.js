/**
 * @format
 * @flow strict-local
 * USE ENV
 * import {API_KEY} from "@env"
 */
import React, {Component} from 'react';
import {FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import Loader from './components/loader';
import {styles} from './styles';
import * as authDispatcher from './redux/actions/authDispatcher';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {API_KEY} from '@env';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import moment from 'moment';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
      rowData: [],
    };
  }

  componentDidMount = async () => {
    //request location(gps) permission for lat long
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      }),
    ).then((result) => {
      if (result === 'granted') {
        this.getLatLng();
      }
    });
  };

  getLatLng = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        let lat = info.coords.latitude;
        let lng = info.coords.longitude;
        this.callData(lat, lng);
      },
      (err) => {
        console.log('Loction error', err);
      },
    );
  };

  callData = (lat, long) => {
    const {actions} = this.props;
    let url = `http://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=hourly,minutely&lat=${lat}&lon=${long}&cnt=5&appid=${API_KEY}`;
    actions.getData(url, (res) => {
      if (!res) {
        this.setState({isError: true});
      } else {
        this.renderRow();
        this.setState({isError: false});
      }
    });
  };
  //next 5 days rows data
  renderRow = () => {
    const {userData} = this.props;
    let arr = userData?.userData?.daily.slice(1, 6);
    this.setState({rowData: arr});
  };
  //in case of error
  renderError = () => {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Something went wrong at our end</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={this.getLatLng}>
          <Text>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  };
  //next 5 days rows view
  renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.bodyText}>
          {moment.unix(item.dt).format('dddd')}
        </Text>
        <Text style={styles.bodyText}>{item.temp.max}</Text>
      </View>
    );
  };
  //weather view
  renderView = () => {
    const {userData} = this.props;
    const {rowData} = this.state;
    console.log('userData=>', userData);
    return (
      <View style={{flex: 1}}>
        <View style={styles.topContainer}>
          <Text style={styles.headTempText}>
            {userData?.userData?.current?.temp}
          </Text>
          <View style={styles.cityContainer}>
            <Text style={styles.bodyText}>{userData?.userData?.timezone}</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={rowData}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  };

  render() {
    const {state} = this.props;
    const {isError} = this.state;
    return (
      <View style={styles.container}>
        <Loader loading={state.isLoader} />
        {isError ? this.renderError() : this.renderView()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.commonReducer,
  userData: state.authReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...authDispatcher}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
