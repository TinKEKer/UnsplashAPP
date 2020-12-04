import React, {useRef} from 'react'
import {Animated} from "react-native";
import {FlatListItem} from "./FlatListItem";


export const PhotosFlatList = ({navigation, setPage, loading, photos, page, overflow}) => {

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <>

            <Animated.FlatList
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }],
                    {
                        useNativeDriver: true
                    }
                )}
                initialNumToRender={10}
                onEndReachedThreshold={0.5}
                refreshing={loading}
                onEndReached={() => setPage(page + 1)}
                data={photos}
                horizontal={true}
                showVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                pagingEnabled={true}
                renderItem={({item, index}) => <FlatListItem item={item} navigation={navigation} scrollX={scrollX}
                                                             overflow={overflow} index={index}/>}
            />
        </>

    )
}