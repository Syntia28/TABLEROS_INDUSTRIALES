import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, ruc, service, details } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados.' },
        { status: 400 }
      );
    }

    // Print to console log on the server side for local testing/monitoring
    console.log('--- NUEVA SOLICITUD DE COTIZACIÓN B2B ---');
    console.log(`Cliente/Contacto: ${name}`);
    console.log(`Empresa: ${company || 'No especificada'} (RUC: ${ruc || 'No especificado'})`);
    console.log(`Email B2B: ${email}`);
    console.log(`Teléfono: ${phone}`);
    console.log(`Requerimiento: ${service}`);
    console.log(`Detalles: ${details || 'Sin especificaciones adicionales'}`);
    console.log('----------------------------------------');

    // Simulate sending email (optional delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Checking if Resend is configured (you can set RESEND_API_KEY in .env.local)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: 'Cotizaciones Web <onboarding@resend.dev>', // default free sender
            to: ['ventas@industrial-automation.pe'], // modify with client's actual email
            subject: `Cotización B2B: ${service} - ${company || name}`,
            html: `
              <h2>Nueva Solicitud de Cotización Comercial (Web)</h2>
              <p><strong>Contacto:</strong> ${name}</p>
              <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
              <p><strong>RUC:</strong> ${ruc || 'N/A'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Servicio Requerido:</strong> ${service}</p>
              <hr />
              <h3>Detalles del Requerimiento:</h3>
              <p>${details.replace(/\n/g, '<br/>')}</p>
            `
          })
        });
        
        if (response.ok) {
          console.log('Correo enviado exitosamente usando Resend API (fetch).');
        } else {
          const errText = await response.text();
          console.error('Error de Resend API response:', errText);
        }
      } catch (err) {
        console.error('Error al intentar enviar correo vía Resend API:', err);
      }
    } else {
      console.log('Resend no configurado. Simulación completada con éxito.');
    }

    return NextResponse.json({ success: true, message: 'Cotización recibida correctamente.' });
  } catch (error: any) {
    console.error('Error en API Quote handler:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar su solicitud de cotización.' },
      { status: 500 }
    );
  }
}
