function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
   config.addressLabel = {en: "IMEI", es: "IMEI"};
}

function getEndpoints(deviceAddress, endpoints)
{
   endpoints.addEndpoint("1", "Localización", endpointType.locationTracker);
   var e = endpoints.addEndpoint("2", "Altitud", endpointType.genericSensor);
   e.variableTypeId = 1041;
   endpoints.addEndpoint("3", "Temperatura del Tracker", endpointType.temperatureSensor);
   endpoints.addEndpoint("4", "Sensor de Luz", endpointType.lightSensor);
   endpoints.addEndpoint("5", "Batería Dispositivo (Voltaje)", endpointType.voltageSensor);
   var e = endpoints.addEndpoint("6", "Batería Dispositivo (Porcentaje)", endpointType.genericSensor);
   e.variableTypeId = 1026;
   endpoints.addEndpoint("7", "Voltaje Solar", endpointType.voltageSensor);
   var e = endpoints.addEndpoint("8", "Velocidad", endpointType.genericSensor);
   e.variableTypeId = 1042;
   endpoints.addEndpoint("9", "Temperatura del Beacon 1", endpointType.temperatureSensor);
   endpoints.addEndpoint("10", "Humedad del Beacon 1", endpointType.humiditySensor);
   endpoints.addEndpoint("11", "Sensor de Luz del Beacon 1", endpointType.lightSensor);
   var e = endpoints.addEndpoint("12", "Batería Beacon 1 (Porcentaje)", endpointType.genericSensor);
   e.variableTypeId = 1026;
   var e = endpoints.addEndpoint("13", "RSSI Beacon 1", endpointType.genericSensor);
   e.variableTypeId = 1043;
   endpoints.addEndpoint("14", "Temperatura del Beacon 2", endpointType.temperatureSensor);
   endpoints.addEndpoint("15", "Humedad del Beacon 2", endpointType.humiditySensor);
   endpoints.addEndpoint("16", "Sensor de Luz del Beacon 2", endpointType.lightSensor);
   var e = endpoints.addEndpoint("17", "Batería Beacon 2 (Porcentaje)", endpointType.genericSensor);
   e.variableTypeId = 1026;
   var e = endpoints.addEndpoint("18", "RSSI Beacon 2", endpointType.genericSensor);
   e.variableTypeId = 1043;
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long", 
      es: "La dirección debe tener exactamente 16 caracteres"
     };
  }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
   rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}