import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import Text from '../components/text/text'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
// import MountainItem from '../components/mountains/mountain-item'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                keyExtractor={(item, index) => item.name}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => {
                    const { name, color } = item;
                    return (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Details', { mountain: item });
                            }}
                            style={styles.item}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={[styles.circle, { backgroundColor: color }]} />
                                <Text preset='h4' style={styles.itemName}>{name}</Text>
                            </View>
                            <AntDesign name="right" size={12} color="white" />
                        </Pressable>
                    );
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    list: {
        padding: spacing[4]
    },
    separator: {
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4],
    },

})