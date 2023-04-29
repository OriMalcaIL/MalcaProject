import pynecone as pc
from MalcaProject.gallery_images import images_urls


def gallery_page():
    gallery = pc.container(images_urls.image4, images_urls.image3, images_urls.image2, images_urls.image1,
                           display="flexFlow", gap="1em", margin="2em", justifyContent="center",
                           style={"width": "80%"})

    return pc.center(
        pc.container(
            pc.heading("גלריית עבודות", align="center"),
            gallery,
            bg_color="white",
            padding="2em",
            shadow="lg",
            border_radius="lg",
            gap="10px",
            style={"display": "flex", "flexDirection": "column", "align-items": "center"}

        ),
        bg_color="gray.50",
        style={
            "minHeight": "100vh",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
        }
    )
