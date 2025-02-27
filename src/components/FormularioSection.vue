<template>
  <v-container id="FormEmail" class="mt-10" data-aos="zoom-in">
    <v-card class="elevation-0" color="card">
      <v-card-title class="headline"
        ><p style="text-align: center; width: 100%">
          {{ $t("formTitle") }}
        </p></v-card-title
      >
      <v-card-subtitle style="text-align: center">
        {{ $t("formSubtitle") }}
      </v-card-subtitle>

      <v-card-text>
        <v-form v-model="valid" @submit.prevent="verifyForm">
          <v-text-field v-model="form.name" :label="`${$t('yourName')} *`" outlined required dense></v-text-field>

          <v-text-field v-model="form.email" :label="$t('yourEmail')" outlined type="email" :rules="[emailRule]" dense></v-text-field>

          <v-text-field v-model="form.tel" :label="`${$t('yourPhoneNumber')} *`" outlined required type="tel" dense></v-text-field>

          <v-textarea v-model="form.message" :label="`${$t('writeMeAMessage')} *`" outlined required rows="4" dense></v-textarea>
          <div class="d-flex justify-center">
            <v-btn :disabled="!isFormValid" color="primary" type="submit"> {{ $t("send") }} </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script scoped>
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../style/GeneralStyle.css";

export default {
  data() {
    return {
      valid: false,
      form: {
        name: "Fernando",
        email: "fernando.rodriguez@didcom.com.mx",
        message: "Hi i am interested in your work",
        tel: "6221562893",
      },
      userId: "uy_YVeT0GsY0S2KsU",
      emailRule: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || this.$t("validEmail"),
    };
  },
  computed: {
    isFormValid() {
      // Verifica que el nombre no esté vacío
      const isNameValid = this.form.name.trim().length > 0;

      // Verifica que el correo sea válido
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const isEmailValid = emailRegex.test(this.form.email);

      // Verifica que el mensaje no esté vacío
      const isMessageValid = this.form.message.trim().length > 0;

      return isNameValid && this.form.tel && isMessageValid;
    },
  },
  methods: {
    verifyForm() {
      const self = this;
      const message = `${this.$t("sentForm1")} "${this.form.tel}" ${this.$t("sentForm2")}`;

      Swal.fire({
        title: self.$t("sentFormQuestion"),
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "blue",
        cancelButtonColor: "#757575",
        confirmButtonText: `<span style="color: white;">${self.$t("send")}</span>`,
        cancelButtonText: `<span style="color: white;">${self.$t("cancel")}</span>`,
        reverseButtons: true,
        customClass: {
          title: "swal-custom-title",
          container: "swal-custom-content",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          self.submitForm();
        }
      });
    },
    submitForm() {
      const self = this;
      const serviceID = "service_it7ncls";
      const templateID = "template_fia2zp1";
      const userID = this.userId;
      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        from_tel: this.form.tel,
        message: this.form.message,
      };
      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log("Correo enviado", response);
          Swal.fire({
            text: self.$t("emailSend"),
            icon: "success",
            showCancelButton: false,
            showConfirmButton:false,
            customClass: {
              title: "swal-custom-title",
              container: "swal-custom-content",
            },
          });
        })
        .catch((err) => {
          console.error("Error al enviar el correo", err);

          Swal.fire({
            text: self.$t("emailSendError"),
            icon: "Error",
            showCancelButton: false,
            showConfirmButton:false,
            customClass: {
              title: "swal-custom-title",
              container: "swal-custom-content",
            },
          });
        });

      // Limpia los campos del formulario
      this.form.name = "";
      this.form.email = "";
      this.form.tel = "";
      this.form.message = "";
    },
  },
};
</script>
