export async function uploadImageToCloudinary(imageFile) {

    if (!imageFile) return "";

    const formData = new FormData();

    formData.append("file", imageFile);
    formData.append("upload_preset", "recipe_upload");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dv8aoncu0/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || "Image Upload Failed");
    }

    return data.secure_url;
}