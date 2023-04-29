import pynecone as pc

index_page_template = pc.center(
    pc.vstack(
        pc.breadcrumb(
            pc.breadcrumb_item(
                pc.breadcrumb_link("Home", href="#")
            ),
            pc.breadcrumb_item(
                pc.breadcrumb_link("Docs", href="#")
            ),
            pc.breadcrumb_item(
                pc.breadcrumb_link("Breadcrumb", href="#")
            ),
            separator=">",
            color="rgb(255,255,255)",
            font_size="40px"
        ),
        pc.container(
            pc.image(src="https://shorturl.at/bmMOQ", style={"width": "700px", "height": "300px"}),
            pc.input(placeholder="Name", align="center"),
            pc.input(placeholder="Email", align="center"),
            pc.input(placeholder="Phone Number", align="center"),
            text_align="center",
            bg="white",
            padding="4em",
            shadow="lg",
            border_radius="lg",
            max_width="800px",
            width="100%"
        ),
    ),
    pc.image(src="https://shorturl.at/ilWY6", style={
        "background-size": "cover",
        "background-position": "center",
        "width": "100%",
        "height": "100vh",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "position": "absolute",
        "top": "0",
        "left": "0"
    },
             position="absolute", z_index="-1")
)

