import pynecone as pc
from pre_made_pages.index_page import index_page_template
from pre_made_pages.galery_page import gallery_page


class IndexState(pc.State):
    pass


def index_page():
    return index_page_template


def gallery():
    return gallery_page()


app = pc.App(state=IndexState)
app.add_page(index_page, route="/", title="Malca Plus 2000")
app.add_page(gallery, route="/gallery")
app.compile()
