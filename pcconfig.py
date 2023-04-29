import pynecone as pc


class MalcaprojectConfig(pc.Config):
    pass


config = MalcaprojectConfig(
    app_name="MalcaProject",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
