Hi,

from my understanding the observed behaviour is what is to be expected given the way it is set up - the filter + display events simply happen before the data is updated and thus use the data available at that time.

For you use case it is probably best to use a data provider with a filtering callback or split the requirements and use a text box as a filter input that fills a listbox. Note: The filtering callback data provider is not available directly for Hilla but you should be able to emulate it via the DataProvider and its filter.

Alternatively a ComboBoxLight provides the option to use any input component and only provides the dropdown functionality. However, it will behave identical to the regular comboxbox with regards to updated data displaying something.

Best regards,
Ronny Edler