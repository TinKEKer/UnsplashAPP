import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {useDispatch} from "react-redux";
import {API_GET_PHOTOS} from "../../config/redux/actions";
import {connect} from "react-redux";
import {Switcher} from "../Switcher";
import {SkeletonPhotoLoader} from "../Loaders/SkeletonLoader";
import {FlatListItemsLoading} from "../Loaders/FlatListItemsLoading";
import {PhotosFlatList} from "./PhotosFlatList";
import {ErrorScreen} from "../ErrorScreen";

const PhotoList = (props) => {
    const {loading, photos,error} = props.state

    const {navigation} = props;

    const [overflow, setOverflow] = useState(true);

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(API_GET_PHOTOS(page))
    }, [page])


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatListItemsLoading loading={loading} photosLength={photos.length}/>
            {photos.length !== 0 ?
                <PhotosFlatList navigation={navigation} setPage={setPage} loading={loading} photos={photos} page={page}
                                overflow={overflow}/> : <SkeletonPhotoLoader overflow={overflow}/>}

            <Switcher overflow={overflow} setOverflow={setOverflow}/>
            <ErrorScreen error={error} setPage={setPage}/>
        </View>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(PhotoList)
