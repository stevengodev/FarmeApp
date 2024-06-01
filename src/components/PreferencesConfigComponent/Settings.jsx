import React, { useState } from 'react';
import { 
  Container, 
  Form, 
  Row, 
  Col, 
  Button, 
  FormGroup, 
  FormCheck, 
  FormLabel, 
  FormControl 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    email: false,
    sms: false,
    push: false,
    language: 'es',
    currency: 'USD',
    theme: 'light',
    units: 'metric',
    milkUnit: 'L',
    temperatureUnit: 'C',
    mainCrop: 'corn',
    irrigationMethod: 'drip',
    reportFrequency: 'weekly',
    dataStorage: 'local'
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    console.log('Configuraciones guardadas:', settings);
  };

  return (
    <Container className="mt-4">
      <h1>Configuración de Preferencias</h1>
      <Form>
        <Form.Group as={Row} controlId="formNotifications" className="mb-4">
          <FormLabel column sm={3}>Configurar Notificaciones</FormLabel>
          <Col sm={9}>
            <FormCheck 
              type="checkbox" 
              label="Notificaciones por Email" 
              name="email" 
              checked={settings.email} 
              onChange={handleChange} 
            />
            <FormCheck 
              type="checkbox" 
              label="Notificaciones por SMS" 
              name="sms" 
              checked={settings.sms} 
              onChange={handleChange} 
            />
            <FormCheck 
              type="checkbox" 
              label="Notificaciones Push" 
              name="push" 
              checked={settings.push} 
              onChange={handleChange} 
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPreferences" className="mb-4">
          <FormLabel column sm={3}>Configurar Preferencias</FormLabel>
          <Col sm={9}>
            <FormGroup className="mb-3">
              <FormLabel>Idioma</FormLabel>
              <FormControl 
                as="select" 
                name="language" 
                value={settings.language} 
                onChange={handleChange}
              >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="fr">Francés</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Moneda</FormLabel>
              <FormControl 
                as="select" 
                name="currency" 
                value={settings.currency} 
                onChange={handleChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="COL">COL</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Tema Oscuro</FormLabel>
              <FormCheck 
                type="switch" 
                id="theme-switch" 
                name="theme" 
                label={settings.theme === 'dark' ? 'Activado' : 'Desactivado'}
                checked={settings.theme === 'dark'} 
                onChange={(event) => handleChange({ target: { name: 'theme', value: event.target.checked ? 'dark' : 'light' } })}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Unidades de Conversión</FormLabel>
              <FormControl 
                as="select" 
                name="units" 
                value={settings.units} 
                onChange={handleChange}
              >
                <option value="metric">Métrico</option>
                <option value="imperial">Imperial</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Unidades de Leche</FormLabel>
              <FormControl 
                as="select" 
                name="milkUnit" 
                value={settings.milkUnit} 
                onChange={handleChange}
              >
                <option value="L">Litros (L)</option>
                <option value="gal">Galones (gal)</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Unidades de Temperatura</FormLabel>
              <FormControl 
                as="select" 
                name="temperatureUnit" 
                value={settings.temperatureUnit} 
                onChange={handleChange}
              >
                <option value="C">Celsius (°C)</option>
                <option value="F">Fahrenheit (°F)</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Tipo de Cultivo Principal</FormLabel>
              <FormControl 
                as="select" 
                name="mainCrop" 
                value={settings.mainCrop} 
                onChange={handleChange}
              >
                <option value="corn">Maíz</option>
                <option value="wheat">Trigo</option>
                <option value="soy">Soja</option>
                <option value="rice">Arroz</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Método de Riego Preferido</FormLabel>
              <FormControl 
                as="select" 
                name="irrigationMethod" 
                value={settings.irrigationMethod} 
                onChange={handleChange}
              >
                <option value="drip">Goteo</option>
                <option value="sprinkler">Aspersión</option>
                <option value="pivot">Pivot</option>
                <option value="flood">Inundación</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Frecuencia de Reportes</FormLabel>
              <FormControl 
                as="select" 
                name="reportFrequency" 
                value={settings.reportFrequency} 
                onChange={handleChange}
              >
                <option value="daily">Diario</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensual</option>
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Almacenamiento de Datos</FormLabel>
              <FormControl 
                as="select" 
                name="dataStorage" 
                value={settings.dataStorage} 
                onChange={handleChange}
              >
                <option value="local">Local</option>
                <option value="cloud">Nube</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Form.Group>

        <Button variant="primary" type='submit' onClick={handleSave}>
          Guardar Configuraciones
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;
