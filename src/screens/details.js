import { Image, Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../components/header/app-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import InfoBox from '../components/mountains/info-box'

export default function Details({ route }) {
    const mountain = route.params.mountain
    const { name, description, elevation, firstAscent, location, thumb, wikiLink } = mountain

    const onLinkHandler = () => {
        Linking.openURL(wikiLink)
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader backBtn={true} title={name} />
            <ScrollView>
                <View style={styles.imageViewWrapper}>
                    <Image
                        style={styles.imageView}
                        source={{
                            uri: thumb,
                        }}
                    />
                </View>
                <View style={styles.detailsView}>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable onPress={onLinkHandler} style={styles.source}>
                        <Text>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />
                <InfoBox title='Elevation' value={elevation} />
                <InfoBox title='First Ascent' value={firstAscent} />
                <InfoBox title='Location' value={location} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageViewWrapper: {
        marginTop: spacing[8],
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        height: 250,
        width: 300,
        borderRadius: 10,
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6]
    },
    description: {
        textAlign: 'center',
        lineHeight: 21
    },
    source: {
        marginTop: spacing[5],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },

});