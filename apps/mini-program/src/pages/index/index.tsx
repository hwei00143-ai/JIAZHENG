import { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='container'>
        <View className='card'>
          <Text className='title'>欢迎使用社区团购</Text>
          <Text className='subtitle'>社区团购，实惠便捷</Text>
        </View>
        
        <View className='features'>
          <View className='feature-item'>
            <Text className='feature-title'>发起团购</Text>
            <Text className='feature-desc'>轻松发起团购，邀请邻居参与</Text>
          </View>
          <View className='feature-item'>
            <Text className='feature-title'>参与团购</Text>
            <Text className='feature-desc'>加入社区团购，享受优惠价格</Text>
          </View>
          <View className='feature-item'>
            <Text className='feature-title'>查看订单</Text>
            <Text className='feature-desc'>实时跟踪订单状态</Text>
          </View>
        </View>

        <View className='actions'>
          <Button className='btn btn-primary' type='primary'>
            立即开始
          </Button>
        </View>
      </View>
    );
  }
}

export default Index;