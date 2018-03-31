import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {UNDERLINE} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const UnderlinePlugin = (type = UNDERLINE) => {
  return {
    renderMark: (props) => {
      if (props.mark.type === type) 
        return commonMark('u')(props);
    }
  }
}
@basicMarkDecorator(UNDERLINE, 'Underline')
export default class Underline extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
