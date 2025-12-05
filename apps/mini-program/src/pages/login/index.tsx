import { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

class Login extends Component {
  componentDidMount() {
    // Check if user is already logged in
    const token = Taro.getStorageSync('token');
    if (token) {
      Taro.switchTab({
        url: '/pages/index/index',
      });
    }
  }

  handleWechatLogin = () => {
    Taro.login({
      success: (res) => {
        if (res.code) {
          // TODO: Send code to backend to get user info and token
          console.log('Login success:', res.code);
          
          // Mock login success
          Taro.setStorageSync('token', 'mock-token');
          Taro.switchTab({
            url: '/pages/index/index',
          });
        } else {
          console.log('Login failed:', res.errMsg);
          Taro.showToast({
            title: '登录失败',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        console.error('Login error:', err);
        Taro.showToast({
          title: '登录出错',
          icon: 'none',
        });
      },
    });
  };

  render() {
    return (
      <View className='container'>
        <View className='login-card'>
          <View className='logo'>
            <Text className='logo-text'>社区团购</Text>
          </View>
          
          <View className='welcome'>
            <Text className='welcome-title'>欢迎登录</Text>
            <Text className='welcome-desc'>使用微信账号快速登录</Text>
          </View>

          <View className='actions'>
            <Button 
              className='wechat-login-btn'
              type='primary'
              onClick={this.handleWechatLogin}
            >
              微信登录
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;