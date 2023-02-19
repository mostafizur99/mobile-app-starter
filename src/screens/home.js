import { FlatList, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'
import { MOUNTAIN_LIST } from '../data/mountain-list'
import { spacing } from '../theme/spacing'
import MountainItem from '../components/mountains/mountain-item'

export default function Home() {
    const [list, setList] = useState(MOUNTAIN_LIST)

    const searchFilter = (text) => {
        const filteredIList = MOUNTAIN_LIST.filter((item) => {
            return (item.name.toLowerCase()).indexOf(text.toLowerCase()) > -1
        })
        setList(filteredIList)
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />

            <TextInput
                placeholder='Search Mountain Name'
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />

            <FlatList
                contentContainerStyle={styles.list}
                data={list}
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
    }
})