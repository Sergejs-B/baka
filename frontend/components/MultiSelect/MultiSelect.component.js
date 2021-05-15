import React, { PureComponent } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { selectStyles } from './MultiSelect.style';

const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
}, {
    id: '16hbajsabsd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sg',
    name: 'Lagos'
}, {
    id: '667atsas',
    name: 'Maiduguri'
}, {
    id: 'hsyasajs',
    name: 'Anambra'
}, {
    id: 'djsjudksjd',
    name: 'Benue'
}, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjd',
    name: 'Abuja'
}
];
const { styleInputGroup, styleDropdownMenu, styleDropdownMenuSubsection, styleMainWrapper } = selectStyles;
class CustomMultiSelect extends PureComponent {
  state = {
      selectedItems: []
  };

  onSelectedItemsChange = (selectedItems) => {
      this.setState({ selectedItems });
  };

  render() {
      const { selectedItems } = this.state;

      return (
          <View style={{ flex: 1 }}>
              <MultiSelect
                  styleDropdownMenu={ styleDropdownMenu}
                  styleInputGroup={ styleInputGroup }
                  styleMainWrapper={ styleMainWrapper }
                  styleSelectorContainer={{ backgroundColor: 'green' }}
                  styleTextTag={{ backgroundColor: 'yellow' }}
                  searchInputStyle={{ backgroundColor: 'orange' }}
                  styleItemsContainer={{ backgroundColor: 'black' }}
                  styleListContainer={{ backgroundColor: 'black' }}
                  tagContainerStyle={{ backgroundColor: 'black' }}
                  styleDropdownMenuSubsection={styleDropdownMenuSubsection}
                  hideTags
                  items={items}
                  uniqueKey="id"
                  ref={(component) => { this.multiSelect = component; }}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText={this.selectText}
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={ (text) => console.log(text)}
                  displayKey="name"
                  submitButtonText="Submit"
              />

          </View>
      );
  }
}
export default CustomMultiSelect;
