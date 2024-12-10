import React from 'react';

const Language = ({tab}) => {
    return (
        <div className={`tabs_window_item ${tab === 1 ? 'active' : ''}`}>
            <div className="tw_item active">English</div>
            <div className="tw_item">Deutsch</div>
            <div className="tw_item">Français</div>
            <div className="tw_item">Português</div>
            <div className="tw_item">Italiano</div>
            <div className="tw_item">Español</div>
            <div className="tw_item">中國人</div>
            <div className="tw_item">日本語</div>
        </div>
    );
};

export default Language;