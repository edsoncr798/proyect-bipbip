<template>
  <section class="steps w-full flex flex-col items-center">
    <h1 class="text-5xl font-medium text-blue-900 mt-10 mb-20">
      ¿Como funciona?
    </h1>
    <div class="flex w-full justify-between">
      <div class="step-info">
        <div class="flex">
          <div>
            <div class="step1">1</div>
            <div class="step-var1"></div>
          </div>
          <div class="ml-10">
            <h2 class="text-3xl font-medium text-blue-900">
              Toca para reservar
            </h2>
            <p class="text-2xl mb-10 mt-4">
              Solo levanta tu telefono y colocalo donde quieras ir. La
              aplicacion te convertira en un conductor en poco tiempo.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <div class="step2">2</div>
            <div class="step-var2"></div>
          </div>
          <div class="ml-10">
            <h2 class="text-3xl font-medium text-blue-900">
              Detalles de conductor
            </h2>
            <p class="text-2xl mb-10 mt-4">
              Una vez que su solicitud de viaje es aceptada, la aplicacion le
              notifica automaticamente todos los deltalles del conductor,
              incluyendo el modelo y marca del automovil.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <div class="step3">3</div>
            <div class="step-var3"></div>
          </div>
          <div class="ml-10">
            <h2 class="text-3xl font-medium text-blue-900">
              Seguimiento y guia
            </h2>
            <p class="text-2xl mb-10 mt-4">
              Eche un vistazo a la ruta que ya esta tomando el conductor para
              llegar a usted. Rastree su ubicacion exacta y guielo si es
              necesario.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <div class="step4">4</div>
            <div></div>
          </div>
          <div class="ml-10">
            <h2 class="text-3xl font-medium text-blue-900">Subete y viaja</h2>
            <p class="text-2xl mb-10 mt-4">
              Una vez que el conductor te alcance, solo subete y disfruta del
              viaje. La aplicacion calculara la tarifa y le dara una factura al
              final del viaje.
            </p>
          </div>
        </div>
      </div>
      <img src="../../../img/screem2.jpeg" alt="img phone" />
    </div>
    <div class="w-full h-2 bg-slate-200"></div>
    <div class="mobile-steps">
      <!--! continued...  -->
    </div>
  </section>
</template>

<style>
.step-info {
  margin-left: 15%;
}

.step1,
.step2,
.step3,
.step4 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #e2e8f0;
  text-align: center;
  line-height: 4;
}

.step-var1,
.step-var2,
.step-var3 {
  height: 100%;
  width: 5px;
  background: #e2e8f0;
  margin-left: 30px;
}

.step1,
.step-var1 {
  background: #1e3a8a;
}

.steps img {
  margin-top: 75px;
  margin-right: 15%;
  width: 300px;
  height: 500px;
  border-radius: 25px;
  margin-left: 100px;
}

@media (max-width: 800px) {
  .steps h1 {
    font-size: 1.8rem;
  }

  .steps h2 {
    font-size: 1.4rem;
  }

  .steps p {
    font-size: 1rem;
    line-height: 1em;
  }
}
</style>
