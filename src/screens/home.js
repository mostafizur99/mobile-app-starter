import { FlatList, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'
import { MOUNTAIN_LIST } from '../data/mountain-list'
import { spacing } from '../theme/spacing'
import MountainItem from '../components/mountains/mountain-item'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />

            <TextInput
                placeholder='Type Mountain Name'
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => {
                    console.log('Text', text)
                }}
            />

            <FlatList
                contentContainerStyle={styles.list}
                data={MOUNTAIN_LIST}
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
    searchInput: {
        color: colors.white,
        padding: spacing[4],
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    },

})