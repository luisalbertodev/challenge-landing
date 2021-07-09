import { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ImageContent } from 'pages/Landing/Landing.sc';
import SectionMainBg from 'assets/section-1/bg.png';

import * as S from './SectionOne.sc';

const SectionOne = () => {
  return (
    <ImageContent image={SectionMainBg} height="704px">
      <S.SectionOne>
        <div className="wrapper_layout">
          <Row start="xs">
            <Col md={6}>
              <Typography variant="h4">
                Se parte de la nueva era del abogado digital.{' '}
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    Genera nuevos clientes
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Posiciona fácilmente tus servicios en línea
                  </Typography>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <S.WrapperPaper>
                <Paper>
                  <Typography variant="h4">
                    Regístrate y solicita una demostración de la plataforma.
                  </Typography>

                  <form noValidate autoComplete="off">
                    <TextField label="Nombre" variant="outlined" />
                    <TextField label="Correo eléctronico" variant="outlined" />
                    <TextField label="Teléfono" variant="outlined" />

                    <FormControl component="fieldset">
                      <FormLabel component="legend">Tipo de negocio</FormLabel>
                      <RadioGroup
                        aria-label="bussine"
                        name="bussine"
                        value="company"
                        onChange={() => {}}
                      >
                        <FormControlLabel
                          value="despacho/firma"
                          control={<Radio />}
                          label="Despacho/firma"
                        />
                        <FormControlLabel
                          value="independiente"
                          control={<Radio />}
                          label="Independiente"
                        />
                      </RadioGroup>
                    </FormControl>

                    <Button variant="contained" color="primary" type="submit">
                      ¡Obtén tu membresía!
                    </Button>
                  </form>
                </Paper>
              </S.WrapperPaper>
            </Col>
          </Row>
        </div>
      </S.SectionOne>
    </ImageContent>
  );
};

export default SectionOne;
