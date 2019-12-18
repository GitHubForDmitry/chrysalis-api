@bazecor-api/hardware-keyboardio-model01
==========================================

[DygmaLab SE][dygma] hardware descriptor.

 [dygma]: https://shop.keyboard.io/

Can be used with `Focus.find()`, `Focus.open()`, and so on.

[![@bazecor-api/hardware-keyboardio-model01](https://img.shields.io/npm/v/@chrysalis-api/hardware-keyboardio-model01.svg?style=for-the-badge&label=@chrysalis-api/hardware-keyboardio-model01&logo=npm)](https://www.npmjs.com/package/@chrysalis-api/hardware-keyboardio-model01)

```
yarn add @bazecor-api/hardware-keyboardio-model01
```

# { Model01 }

Provides a hardware description to be used by other Bazecor modules ([`@bazecor-api/focus`](focus.md)) and the Bazecor UI itself.

```javascript
import Focus from "@bazecor-api/focus";
import { Model01 } from "@bazecor-api/hardware-keyboardio-model01";

let focus = new Focus();
focus.open(Model01);
```
