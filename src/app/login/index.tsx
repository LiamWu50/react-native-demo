import React from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';

export default function User(): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/0?v=4' }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>用户名称</Text>
          <Text style={styles.sub}>基础信息</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>手机号</Text>
        <Text style={styles.value}>138****0000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>邮箱</Text>
        <Text style={styles.value}>user@example.com</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>地址</Text>
        <Text style={styles.value}>北京市东城区</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#ddd' },
  headerText: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '600', color: '#111' },
  sub: { fontSize: 12, color: '#666', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  label: { fontSize: 14, color: '#888' },
  value: { fontSize: 16, color: '#222', marginTop: 6 },
});
