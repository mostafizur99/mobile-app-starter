import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import MountainItem from '../components/mountains/mountain-item'

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
                    return (
                        <MountainItem item={item} />
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

})