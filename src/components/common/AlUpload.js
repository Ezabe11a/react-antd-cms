import React from 'react';

import img from '@/utils/img';
import { Upload } from 'antd';

const AlUpload = (props) => {
    const onChange = (e) => {
        
        // console.log(e.file);
        if (e.file && e.file.response && e.file.response.data) {
            const url = img.uploadUrl + e.file.response.data.url
            props.onChange(url)
        }
    }

    // console.log('-------------', props.value)

    return (
        <Upload
            name='file'
            action={img.uploadUrl + '/api/v1/upload/img'}
            multiple={false}
            listType="picture-card"
            className='avatar-uploader'
            onChange={onChange}
            showUploadList={false}
        >
            <img src={props.value || img.uploadIcon} style={{width:'100px',height:'100px',overflow:'hidden'}} alt="avatar" />
        </Upload>

    )
}

export default AlUpload
