<template>
  <div class="main_app">
    <div class="">
      <!-- Header -->
      <div class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <div class="icon">
          <i class="fa-solid fa-arrow-right arrow-icon"></i>
        </div>
      </div>

      <div class="bottom">
        <!-- Main Body -->
        <div class="main">
          <div id="show-content" class="show">
            <p id="content-txt"></p>
          </div>
          <div id="show-email" class="hide">
            <h3>Email</h3>
          </div>
          <div id="show-others" class="hide">
            <p id="others-txt">This feature is not available yet.</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <button id="handleContent">Content</button>
          <button id="handleEmail">Email</button>
          <button id="handleOthers">Others</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentData from "../entry/background";

export default {
  name: "popupView",
  data() {
    return {
      msg: "popup",
      content: contentData.content,
      content2: contentData.content2,
      emails: contentData.emails,
    };
  },
  mounted() {
    this.handleContent();
    this.handleEmail();
    this.handleOthers();
  },
  methods: {
    handleContent() {
      document.body.onload = () => {
        document.getElementById("show-content").style.display = "block";
        document.getElementById("show-email").style.display = "none";
        document.getElementById("show-others").style.display = "none";
      };
      document.getElementById("handleContent").addEventListener("click", () => {
        document.getElementById("show-content").style.display = "block";
        document.getElementById("show-email").style.display = "none";
        document.getElementById("show-others").style.display = "none";
      });
    },
    handleEmail() {
      document.getElementById("handleEmail").addEventListener("click", () => {
        document.getElementById("show-content").style.display = "none";
        document.getElementById("show-email").style.display = "block";
        document.getElementById("show-others").style.display = "none";
      });
    },
    handleOthers() {
      document.getElementById("handleOthers").addEventListener("click", () => {
        document.getElementById("show-content").style.display = "none";
        document.getElementById("show-email").style.display = "none";
        document.getElementById("show-others").style.display = "block";
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 400px;
  min-height: 500px;
  border-radius: 10px;
}

.show {
  display: block;
}

.hide {
  display: none;
}

.header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: linear-gradient(
    90deg,
    rgb(231, 245, 255),
    rgba(255, 255, 255, 0)
  );
  border-radius: 12px 12px 0px 0px;
  padding: 20px 16px;
  margin: 0px;
}

.bottom {
  height: 436px;
}

.main {
  width: 100%;
  height: 390px;
  padding: 15px 20px;
  overflow: auto;
}

.main::-webkit-scrollbar {
  display: none;
}

.footer {
  width: 100%;
  display: flex;
  align-self: flex-end;
  /* justify-content: space-between; */
}

.footer button {
  width: 100%;
  height: 46px;
  border: none;
  background: #3f51b5;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.logo img {
  width: 120px;
  height: 30px;
  float: left;
}

.arrow-icon {
  font-size: 24px;
  cursor: pointer;
}

.email-style {
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-decoration: underline;
  margin: 8px 0;
}

.content-style {
  margin-bottom: 10px;
}

.content-style p {
  text-align: justify;
  margin-bottom: 0px;
}

#show-content h2,
#show-content h3 {
  font-size: 16px;
}

#show-content p {
  margin-bottom: 10px;
}
</style>
