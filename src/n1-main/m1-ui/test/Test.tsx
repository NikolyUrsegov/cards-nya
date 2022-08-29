import React from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";

const Test = () => {
    return (
        <div>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperButton>button</SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperEditableSpan value={'SuperEditableSpan'}/>
            </div>
            <div>
                <SuperSelect options={['1', '2', '3', '4']}/>

            </div>
            <div>
                <SuperRadio options={[1, 2, 3, 4]}/>
            </div>
        </div>
    );
};

export default Test;