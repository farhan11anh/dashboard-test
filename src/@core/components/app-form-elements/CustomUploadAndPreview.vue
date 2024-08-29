<script setup>
const props = defineProps({
  imagePreview: {
    type: String,
    required: true,
  },
  btnTitle: {
    type: String,
    required: true,
  },
  customFontSize: {
    type: String,
    required: false,
  },
  warningMessage: {
    type: String,
    required: true,
  },
  maxSize: {
    type: String,
    required: true,
  }
});

const defaultImage = "/src/assets/images/merchant/file-upload.png"; // replace with your default image path
const imagePreview = ref(defaultImage);
const fileInput = ref(null); // Initialize fileInput reference

const emit = defineEmits(["update:imagePreview"]);

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click(); // Access the DOM element correctly
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Check file size and format
    if (
      file.size <= 6 * 1024 * 1024 &&
      ["image/jpeg", "image/png"].includes(file.type)
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
        emit("update:imagePreview", e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Invalid file format or size. Please select a valid image.");
      resetImage();
    }
  }
};

const resetImage = () => {
  imagePreview.value = defaultImage;
};
</script>

<template>
  <VRow>
    <!-- <VCol 
                > -->
    <div class="preview-container">
      <img :src="imagePreview" alt="Image Preview" class="image-preview" />
    </div>
    <!-- </VCol> -->
    <VCol cols="6">
      <!-- Action Buttons -->
      <VRow justify="space-around">
        <VCol cols="8">
          <!-- Upload Button -->
          <VBtn width="100%" @click="triggerFileUpload"> <span :style="`font-size: ${customFontSize}`" >{{ btnTitle }}</span></VBtn>
        </VCol>
        <VCol cols="4">
          <VBtn color="secondary" variant="tonal" @click="resetImage">
            Reset
          </VBtn>
          <!-- File Input (Hidden) -->
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            accept="image/jpeg, image/png"
            class="d-none"
          />
        </VCol>
        <VCol cols="12">
          <div class="file-guidelines">
            <p>{{ warningMessage }}</p>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style>
    .uploader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.preview-and-actions {
  display: flex;
  align-items: flex-start;
}

.preview-container {
  width: 150px; /* Adjust width as needed */
  /* height: 200px; Adjust height as needed */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* margin-right: 20px; Space between preview and buttons */
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* border: 1px solid #ccc; */
}

.actions-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.upload-btn,
.reset-btn {
  margin-bottom: 10px; /* Space between buttons */
}

.file-guidelines {
  margin-top: 10px;
  text-align: left;
  font-size: 0.9rem;
  color: #666;
}

</style>
