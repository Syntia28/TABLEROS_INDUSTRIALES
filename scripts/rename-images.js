const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/FOTO DE TABLEROS');

const mapping = {
  '20260328_114014': 'tablero-distribucion-fuerza-lima',
  '20260328_114920': 'tablero-autosoportado-distribucion-electrica',
  '20260328_114955': 'tablero-control-automatizacion-plc',
  '20260328_115158': 'tablero-transferencia-automatica-emergencia',
  '20260328_120223': 'gabinete-electrico-control-motores-ccm',
  '20260328_120237': 'tablero-adosado-distribucion-fuerza',
  '20260328_120255': 'sistema-proteccion-electrica-industrial',
  '20260417_093320': 'tablero-control-bombas-agua',
  '20260417_093325': 'gabinete-metalico-control-procesos',
  '20260417_093337': 'tablero-distribucion-secundaria-empotrable',
  '20260417_093358': 'celda-media-tension-proteccion',
  '20260417_093402': 'tablero-electrico-general-industria',
  '20260424_122415': 'tablero-control-ventilacion-forzada',
  '20260424_122457': 'gabinete-control-automatizacion-hmi',
  '20260424_122502': 'tablero-banco-condensadores-energia',
  '20260424_144718': 'tablero-distribucion-trifasico-comercial',
  '20260424_144756': 'gabinete-distribucion-energia-segura',
  '20260424_152420': 'tablero-monitoreo-parametros-electricos',
  '20260424_152629': 'tablero-automatizado-control-procesos',
  '20260506_174837': 'tablero-electrico-proteccion-motores',
  '20260506_174855': 'gabinete-automatizacion-variadores-frecuencia',
  '20260506_175724': 'tablero-distribucion-principal-autosoportado',
  '20260513_102218': 'tablero-control-alumbrado-programable',
  '20260513_102242': 'gabinete-metalico-distribucion-fuerza',
  '20260513_104016': 'tablero-distribucion-trifasica-talleres',
  '20260513_145927': 'tablero-autosoportado-control-procesos',
  '20260513_145946': 'tablero-control-sistema-presion-constante',
  '20260513_145952': 'gabinete-electrico-distribucion-lima',
  '20260523_112553': 'tablero-transferencia-grupos-electrogenos',
  '20260523_112637': 'tablero-distribucion-fuerza-edificios',
  '20260523_113522': 'tablero-proteccion-diferencial-industrial',
  '20260523_113538': 'gabinete-distribucion-caja-moldeada',
  '20260525_125441': 'tablero-control-extractores-aire',
  '20260525_125543': 'tablero-distribucion-subestacion-electrica',
  '20260525_125559': 'gabinete-control-scada-automatizacion',
  '20260525_125646': 'tablero-electrico-metalico-autosoportado'
};

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  let count = 0;
  files.forEach(file => {
    const ext = path.extname(file);
    const nameWithoutExt = path.basename(file, ext);
    
    if (mapping[nameWithoutExt]) {
      const newName = mapping[nameWithoutExt] + ext;
      const oldPath = path.join(imageDir, file);
      const newPath = path.join(imageDir, newName);

      if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} -> ${newName}`);
        count++;
      }
    }
  });

  console.log(`Successfully renamed ${count} files.`);
});
