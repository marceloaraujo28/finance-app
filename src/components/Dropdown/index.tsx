import {
  Picker,
  PickerProps,
  PickerItemProps,
} from "@react-native-picker/picker";
import { View } from "react-native";

type DropdownItems = {
  id: number;
  label: string;
  value: string;
};

type IPickerItem = PickerItemProps;

type DropdownProps = {
  Items: DropdownItems[];
  onChangeValue: (itemValue: string) => void;
  value: string;
  pickerItem?: IPickerItem;
} & PickerProps;

export function Dropdown({
  Items,
  onChangeValue,
  value,
  pickerItem,
  ...props
}: DropdownProps) {
  return (
    <View>
      {Items ? (
        <Picker {...props} selectedValue={value} onValueChange={onChangeValue}>
          {Items.map((item) => {
            return (
              <Picker.Item
                {...pickerItem}
                label={item.label}
                value={item.value}
                key={item.id}
              />
            );
          })}
        </Picker>
      ) : null}
    </View>
  );
}
