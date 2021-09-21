Code Review

|Line|Comment|
|-|-|
|05|Typo: setFeul should be setFuel|
|06|Typo: setAlertTxt should be setAlertText|
|13|console.log should be removed|
|18 19|unnecessary ; at the end of the if statement|
|18|this condition should be if(!fuel.litres)|
|19|This condition should be if( fuel.litres > 10000) |
|25|I suggest to use class instead of style and the condition needs to check if the fuel is over 10k. Also yo can use a shorthand ie.:  `class={fuel.litres > l0000' && {"text-red"}}`|