// @ts-nocheck

import Personne from './Personne';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.example.application.Personne.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///C:/Users/roussill1/Documents/Dev/hilla_combobox/src/main/java/com/example/application/Personne.java}
 */
export default class PersonneModel<T extends Personne = Personne> extends ObjectModel<T> { 
  static createEmptyValue: () => Personne;

  get nom(): StringModel {
    return this[_getPropertyModel]('nom', StringModel, [true]);
  }

  get prenom(): StringModel {
    return this[_getPropertyModel]('prenom', StringModel, [true]);
  }

  get email(): StringModel {
    return this[_getPropertyModel]('email', StringModel, [true]);
  }

  get displayName(): StringModel {
    return this[_getPropertyModel]('displayName', StringModel, [true]);
  }

  get nickname(): StringModel {
    return this[_getPropertyModel]('nickname', StringModel, [true]);
  }

  get appellation(): StringModel {
    return this[_getPropertyModel]('appellation', StringModel, [true]);
  }
}
