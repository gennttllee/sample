const response = [
    {
        image: '/images/kedro.svg',
        name: 'kedro',
        internet: 'https://kedro.org/',
        github: 'https://github.com/kedro-org/kedro',
        docs: 'https://kedro.readthedocs.io/en/stable/',
        tags: [
            'Pipeline orchestration',
            'Experiment tracking'
        ],
        note: 'Kedro is an open-source Python framework for creating reproducible, maintainable, and modular data science code.',
        list: [
            'You want a framework for pipelining both data engineering- and data science-related tasks.',
            'You need a data science framework that supports collaboration in a single code base.',
            'You want to generate pipelines as Python code',
            'You want to visualize data pipelines.',
            'You want to execute tasks in parallel efficiently.',
            'You want to manage data in data catalogs.',
        ],
        watch: [
            'Data catalogs are difficult to implement when the existing data workflow is non-structured with flat file data and manual file movement.'
        ],
        install: 'pip install kedro',
        integratedIcons: [
            {
                name: 'Apache Airflow',
                image: '/images/apache.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: ' Mlflow',
                image: '/images/mlflow.svg'
            },
            {
                name: 'Dolt',
                image: '/images/Dolt.svg'
            },
            {
                name: 'Argo Workflows',
                image: '/images/argoworkflows.svg'
            },
            {
                name: 'Prefect',
                image: '/images/prefect.svg'
            },
            {
                name: 'Neptune',
                image: '/images/neptune.svg',
            }
        ]
    },
    {
        name: 'modelDB',
        internet: 'https://www.verta.ai/',
        github: 'https://github.com/VertaAI/modeldb',
        docs: 'https://docs.verta.ai/verta/',
        tags: [
            'Experiment tracking',
            'Model registry',
            'Model serving',
            'Model monitoring'
        ],
        note: 'ModelDB is an open-source system for machine learning model versioning, metadata, and experiment management.',
        list: [
            'You want a lightweight library for tracking experiments and logging metrics, artifacts, and models.'
        ],
        watch: [
            'ModelDB does not provide automatic logging.'
        ]
    },
    {
        name: '    Mlflow',
        image: '/images/mlflow.svg',
        internet: 'https://mlflow.org/',
        github: 'https://github.com/mlflow/mlflow/',
        docs: 'https://mlflow.org/docs/latest/index.html',
        tags: [
            'Experiment tracking',
            'Artifact tracking',
            'Model registry',
            'Model serving'
        ],
        note: 'MLflow is an open-source platform for managing the end-to-end machine learning lifecycle.',
        list: [
            'You want to organize projects and runs and track your experiments (manual and automatic logging), artifacts, and data.',
            'You want to keep track of your models with a model registry and serve them using integrations',
            'You want a platform that is non-opinionated and gives you flexibility.'
        ],
        watch: [
            'MLflow can track data but provides limited capability in terms of data versioning. You may have to integrate other tools.',
            "MLflow's built-in model serving is quite limited. You will likely need to integrate with a third-party tool for a robust solution.",
        ],
        install: 'pip install mlflow',
        integratedIcons: [
            {
                image: '/images/kedro.svg',
                name: 'kedro',
            },
            {
                name: 'ZenML',
                image: '/images/zenml.svg'
            },
            {
                name: 'BentoMl',
                image: '/images/bentoml.svg'
            },
            {
                name: 'KServe',
                image: '/images/kserve.svg'
            },
            {
                name: 'Evidently',
                image: '/images/evidently.png'
            },
            {
                name: 'TorchServe',
                image: '/images/torchserve.svg'
            },
            {
                name: 'ray',
                image: '/images/ray.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Prometheus',
                image: '/images/prometheus.svg'
            },
            {
                name: 'Neptune',
                image: '/images/neptune.svg',
            }
        ]
    },
    {
        name: 'Determined',
        image: '/images/determined.svg',
        internet: 'https://www.determined.ai/',
        github: 'https://github.com/determined-ai/determined',
        docs: 'https://docs.determined.ai/latest/',
        tags: [
            'Experiment tracking',
            'Model registry'
        ],
        note: 'Determined is an open-source deep learning training platform that makes building models fast and easy.',
        list: [
            'You want a framework-agnostic platform for training models, tuning hyperparameters, tracking experiments, and a built-in model registry.',
            'You want a platform that is opinionated and works with minimal effort.',
            'You want a declarative API.',
            'You want a platform that manages your training infrastructure with autoscaling to reduce cloud costs',
            'You want to be able to deploy on-prem, major cloud providers, and Kubernetes.'
        ],
        install: 'pip install determined',
        integratedIcons: [
            {
                name: 'Prometheus',
                image: '/images/prometheus.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Pachyderm',
                image: '/images/pachyderm.svg'
            },
            {
                name: 'DVC',
                image: '/images/dvc.svg'
            },
            {
                name: 'Seldone Core',
                image: '/images/seldonecore.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Apache Airflow',
                image: '/images/apache.svg'
            },
        ]
    },
    {
        name: 'DVC',
        image: '/images/dvc.svg',
        internet: 'https://dvc.org/',
        github: 'https://github.com/iterative/dvc',
        docs: 'https://dvc.org/doc',
        tags: [
            'Experiment tracking',
            'Data versioning',
            'Pipeline orchestration'
        ],
        note: 'https://dvc.org/doc',
        list: [
            'You want to be able to version arbitrarily large files, datasets, and models using a similar workflow as Git.',
            "You want many options for remote storage of your data (S3, Minio, Google Cloud Storage, Google Drive, Azure Blob Storage, etc.)",
            'You want to create pipelines and track your experiments.',
        ],
        watch: [
            'You must use DVC alongside a Git repository to enable its versioning features.'
        ],
        install: 'pip install dvc',
        integratedIcons: [
            {
                name: 'Determined',
                image: '/images/determined.svg',
            },
            {
                name: 'Git',
                image: '/images/git.svg'
            },
            {
                name: 'GitLab',
                image: '/images/gitlab.svg'
            }
        ]
    },
    {
        name: 'wWights & Biases',
        image: '/images/weights.svg',
        internet: 'https://wandb.ai/site',
        github: 'https://github.com/wandb/wandb',
        docs: 'https://docs.wandb.ai/',
        tags: [
            'Experiment tracking',
            'Artifact tracking',
            'Data versioning',
            'Model registry'
        ],
        note: 'Weights & Biases is a tool to track and visualize your machine learning pipeline pieces, from datasets to production models.',
        list: [
            'You want a lightweight Python library specialized in experiment tracking, artifact tracking, and visualization.',
            'You want to get started quickly with a free (for personal use) hosted platform. ',
            'You want built-in integrations with popular ML Frameworks (Keras, Fastai, etc.), repositories (Hugging Face, XGBoost, etc.), and tools (Kubeflow Pipelines, OpenAI Gym, etc.)',
            'You want built-in integrations with popular ML Frameworks (Keras, Fastai, etc.), repositories (Hugging Face, XGBoost, etc.), and tools (Kubeflow Pipelines, OpenAI Gym, etc.)',
        ],
        watch: [
            'Only the client is open-source and requires signing up.',
            'The client covers data logging to Weights & Biases, data queries, and downloads of your logged data.',
            'The free plan is only for personal projects.',
            'Self-hosted deployment requires an Enterprise plan.',
        ],
        install: 'pip install wandb',
        integratedIcons: [
            {
                name: 'ZenMl',
                image: '/images/zenml.svg'
            },
            {
                name: 'TensorBoard',
                image: '/images/tensorBoard.png'
            },
            {
                name: 'Ray',
                image: '/images/ray.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
        ]
    },
    {
        name: 'Neptune',
        image: '/images/neptune.svg',
        internet: 'https://neptune.ai/home',
        github: 'https://github.com/neptune-ai/neptune-client',
        docs: 'https://docs.neptune.ai/',
        tags: [
            'Experiment tracking',
            'Experiment tracking',
            'Model registry',
            'Artifact tracking'
        ],
        note: 'Neptune is a flexible metadata store for MLOps that allows teams to log, store, display, organize, compare, and query model-building metadata.',
        list: [
            'You want a lightweight tool to cover data versioning, model registry, experiment, and artifact tracking.',
            'You want to record and monitor model training, evaluation, or production runs.',
            'You want a tool that covers a wide range of metadata types to log and display, from model parameters to audio and video files.',
            'You want 25+ built-in integrations with popular Python libraries.'
        ],
        watch: [
            'Only the Neptune client is open-source and requires signing up.',
            'The Neptune client covers data logging to the Neptune server, data queries, and downloads of your logged data.',
            'The free plan is only for individual use up to 200 monitoring hours/month.',
            'Self-hosted deployment requires an Organization plan. ',
        ],
        install: 'pip install neptune-client',
        integratedIcons: [
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                image: '/images/kedro.svg',
                name: 'kedro',
            },
            {
                name: ' Mlflow',
                image: '/images/mlflow.svg'
            },
            {
                name: 'TensorBoard',
                image: '/images/tensorBoard.png'
            }
        ]
    },
    {
        name: 'Polyaxon',
        image: '/images/polyaxon.svg',
        internet: 'https://polyaxon.com/',
        github: 'https://github.com/polyaxon/polyaxon',
        docs: 'https://polyaxon.com/docs/',
        tags: [
            'Experiment tracking',
            'Artifact tracking',
            'Pipeline orchestration'
        ],
        note: 'Polyaxon is a platform for building, training, and monitoring large-scale deep learning applications.',
        list: [
            'You want a self-hosted platform with a library for tracking experiments and data, hyperparameter tuning, and visualizing results.',
            'You would like to use YAML to configure training jobs, pipelines, and deployments.',
            'You want to have many integration options with your favorite artifact store, container registry, git provider, notification and alerting, etc.',
        ],
        install: 'pip install polyaxon',
        integratedIcons: [
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Horovod',
                image: '/images/horovod.svg'
            },
            {
                name: 'TensorBoard',
                image: '/images/tensorBoard.png'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'FastAPI',
                image: '/images/fastapi.svg'
            },
            {
                name: 'GitLab',
                image: '/images/gitlab.svg'
            },
            {
                name: 'Apache Airflow',
                image: '/images/apacheairflow.svg'
            },
            {
                name: 'Argo Workflows',
                image: '/images/argoworkflows.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
        ]
    },
    {
        name: 'ClearML',
        image: '/images/clearMl.svg',
        internet: 'https://clear.ml/',
        github: 'https://github.com/allegroai/clearml',
        docs: 'https://clear.ml/docs/latest/docs/',
        tags: [
            'Experiment tracking',
            'Artifact tracking',
            'Pipeline orchestration',
            'Model registry',
            'Model serving',
            'Model monitoring'
        ],
        note: 'ClearML is an end-to-end platform with an auto-magical suite of tools to streamline your ML workflow.',
        list: [
            'You want an all-in-one tool that tracks experiments (including hyperparameters, data, artifacts, and models), handles pipelines and serves models.',
            'You prefer to use a Python API for creating and configuring resources.',
        ],
        install: 'pip install clearml-agent',
        integratedIcons: [
            {
                name: 'TensorBoard',
                image: '/images/tensorBoard.png'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            }
        ]
    },
    {
        name: 'TensorBoard',
        image: '/images/tensorBoard.png',
        internet: 'https://tensorboard.dev/',
        github: 'https://github.com/tensorflow/tensorboard',
        docs: 'https://www.tensorflow.org/tensorboard/get_started',
        tags: ['Experiment tracking'],
        note: 'TensorBoard is a visualization toolkit to optimize and debug ML models.',
        list: [
            'You want to track ML experiment metrics like loss and accuracy.',
            'You want to visualize the tracked metrics and model architecture.',
            'You want to view model histograms.',
            'You want to log diagnostic data as images.',
            'You want an integrated What-if Tool to analyze black-box classification and regression ML models.',
            'You want an integrated debugger tool.',
        ],
        watch: [
            'What-if Tool requires TensorFlow Serving tool, and the dataset must be in a TFRecord file accessible by TensorBoard.'
        ],
        integratedIcons: [
            {
                name: 'wWights & Biases',
                image: '/images/weights.svg',
            },
            {
                name: 'Neptune',
                image: '/images/neptune.svg',
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg',
            },
            {
                name: 'ClearML',
                image: '/images/clearMl.svg',
            },
            {
                name: 'Orchest',
                image: '/images/orchest.svg'
            }
        ]
    },
    {
        name: 'Kubeflow',
        image: '/images/kubeflow.svg',
        internet: 'https://www.kubeflow.org/',
        github: 'https://github.com/kubeflow/kubeflow',
        docs: 'https://www.kubeflow.org/docs/',
        tags: [
            'Pipeline orchestration',
            'Experimentation',
            'Artifact tracking'
        ],
        note: 'Kubeflow makes deploying ML workflows on Kubernetes simple, portable and scalable.',
        list: [
            'You want an opinionated pipeline orchestration toolbox that is focused on ML-specific workloads on Kubernetes.',
            'You want a tool that is cloud provider agnostic.',
            'You want a framework that integrates all components to cover each phase of the ML lifecycle.',
            'You want to run Jupyter Notebooks on GPU instances with shared data backends.',
            'You want to autoscale compute resources to your workload needs.',
            'You want to deploy ML models to production.'
        ],
        watch: [
            'Extensive configuration options require significant expertise and experimentation to get the optimal configuration.',
            'Reliability issues may arise from component dependencies and their version incompatibilities. Updating one component might break other parts due to incompatibilities.',
            'Kubeflow expects that containers are in cloud container registries.',
        ],
        integratedIcons: [
            {
                name: 'Argo Workflows',
                image: '/images/argoworkflows.svg',
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'KServe',
                image: '/images/kserve.svg'
            },
            {
                name: 'Seldone Core',
                image: '/images/seldonecore.svg'
            },
            {
                name: 'BentoMl',
                image: '/images/bentoml.svg'
            },
            {
                name: 'MLRun',
                image: '/images/mlrun.png'
            },
            {
                name: 'Tensoflow Serving',
                image: '/images/tensoflow serving.svg'
            },
            {
                name: 'Kedro',
                image: '/images/kedro.svg'
            },
            {
                name: 'ZenMl',
                image: '/images/zenml.svg'
            },
            {
                name: 'Flyte',
                image: '/images/flyte.svg'
            },
            {
                name: 'Determined',
                image: '/images/determined.svg'
            },
            {
                name: 'Weight and Biases',
                image: '/images/weights.svg'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            },
            {
                name: 'LakeFS',
                image: '/images/lakefs.svg'
            }
        ]
    },
    {
        name: 'Jupyter',
        image: '/images/jupyter.svg',
        internet: 'https://jupyter.org/',
        github: 'https://github.com/jupyter/notebook',
        docs: 'https://docs.jupyter.org/en/latest/',
        tags: [
            'Experimentation'
        ],
        note: 'Jupyter Notebook is an open-source web application where you can create and share documents that contain live code, equations, visualizations, and text.',
        list: [
            'You want a web-based notebook where you can interactively run pieces of code, visualize the outcomes and embed text and images.',
            'You want to be able to share and present data easily.',
            'You want a tool with a large community and many extensions.'
        ],
        watch: [
            "Jupyter doesn't have the full capabilities of an IDE, such as code completion, linting and debugging.",
            'You can execute code cells in any order, leading to experiments that you may not be able to reproduce.'
        ],
        install: 'pip install jupyterlab',
        integratedIcons: [
            {
                name: 'KubeFlow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Dagster',
                image: '/images/dagster.svg'
            },
            {
                name: 'Flyte',
                image: '/images/flyte.svg'
            },
            {
                name: 'Evidently',
                image: '/images/evidently.png'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Dask',
                image: '/images/dask.svg'
            },
            {
                name: 'Neptune',
                image: '/images/neptune.svg'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            },
            {
                name: 'ClearML',
                image: '/images/clearMl.svg'
            },
            {
                name: 'Orchest',
                image: '/images/orchest.svg'
            },
            {
                name: 'Nuclio',
                image: '/images/nuclio.png'
            }
        ]
    },
    {
        name: 'Polynote',
        image: '/images/polynote.svg',
        internet: 'https://polynote.org/latest/',
        github: 'https://github.com/polynote/polynote',
        docs: 'https://polynote.org/latest/docs/',
        tags: [
            'Experimentation'
        ],
        note: 'Polynote is a data science notebook with first-class Scala support.',
        list: [
            'You want the ability to mix multiple languages in a single notebook, e.g., define a variable in one language and use it in another.',
            'You want an interactive notebook with code completion and WYSIWYG text editing.',
            'You want first-class support for Scala and built-in integration with Apache Spark.'
        ],
        watch: [
            'Polynote currently supports Python, Scala, SQL, and Vega.',
            'Currently does not support Windows installation.',
        ],
        integratedIcons: [
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            }
        ]
    },
    {
        name: 'Spyder',
        image: '/images/spyder.svg',
        internet: 'https://www.spyder-ide.org/',
        docs: 'https://docs.spyder-ide.org/current/index.html',
        tags: [
            'Experimentation'
        ],
        note: 'Spyder is a free and open-source scientific environment written in Python, for Python.',
        list: [
            'You want an IDE for Python with code completion, debugging, variable exploration/editing in the console, static code analysis, and profiling.',
            'You want built-in integration with scientific libraries (NumPy, SciPy, Matplotlib, pandas, etc.)'
        ],
        watch: [
            "Spyder doesn't support languages other than Python."
        ]
    },
    {
        name: 'Apache Zeppelin',
        image: '/images/apachezeppelin.png',
        internet: 'https://zeppelin.apache.org/',
        github: 'https://github.com/apache/zeppelin',
        docs: 'https://zeppelin.apache.org/docs/latest/',
        tags: [
            'Experimentation'
        ],
        note: 'Apache Zeppelin is a web-based notebook that enables data-driven, interactive data analytics and collaborative documents with SQL, Scala, Python, R, and more.',
        list: [
            'You want an interactive web-based data science notebook.',
            'You want built-in Apache Spark support.,',
            'You want great built-in data visualization. '
        ],
        watch: [
            'Apache Zeppelin has a growing community, but it is relatively recent and less mature than other tools.'
        ],
        integratedIcons: [
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Git',
                image: '/images/git.svg'
            }
        ]
    },
    {
        name: 'Dolt',
        image: '/images/Dolt.svg',
        internet: 'https://www.dolthub.com/',
        github: 'https://github.com/dolthub/dolt',
        docs: 'https://docs.dolthub.com/introduction/what-is-dolt',
        tags: [
            'Data versioning'
        ],
        note: 'Dolt is a SQL database with Git functionality. Git versions files, Dolt versions tables.',
        list: [
            'You want to give SQL database Git functionality.',
            'You want to track what database you used to train a model and when.',
            'You want to create individual databases for each team member.',
            "You want a direct replacement for MySQL. You don't want to rewrite the application code.",
            'You want a tool where all Git commands work natively.',
        ],
        watch: [
            '2x - 20x slower than MySQL.',
            'It is limited to tabular data.',
            'Dolthub Pro account is required for private databases.',
        ],
        install: "sudo bash -c 'curl -L https://github.com/dolthub/dolt/releases/latest/download/install.sh | bash'",
        integratedIcons: [
            {
                name: 'kedro',
                image: '/images/kedro.svg'
            },
            {
                name: 'Flyte',
                image: '/images/flyte.svg'
            }
        ]
    },
    {
        name: 'Git LFS',
        image: '/images/gitlfs.svg',
        internet: 'https://git-lfs.github.com/',
        github: 'https://github.com/git-lfs/git-lfs',
        docs: 'https://github.com/git-lfs/git-lfs/tree/main/docs',
        tags: [
            'Data versioning',
        ],
        note: 'Git LFS is an open-source tool that allows you to version large files with Git.',
        list: [
            'You want to version large files such as datasets.',
            'You want to use the same commands and interface as versioning code with Git.',
        ],
        watch: [
            'Source code repository tools may impose a file size limit (2GB for GitHub Free)',
            'You must download training data when cloning a remote repository. It requires large Internet bandwidth and can be very slow.',
        ],
        install: 'git lfs install',
        integratedIcons: [
            {
                name: 'Git',
                image: '/images/git.svg'
            }
        ]
    },
    {
        name: 'Pachyderm',
        image: '/images/pachyderm.svg',
        internet: 'https://www.pachyderm.com/',
        github: 'https://github.com/pachyderm/pachyderm',
        docs: 'https://docs.pachyderm.com/latest/',
        tags: [
            'Artifact tracking',
            'Data versioning',
            'Pipeline orchestration',
        ],
        note: 'Pachyderm is a tool for data versioning and pipelines for MLOps.',
        list: [
            'You would like a tool that handles data versioning and pipeline automation.',
            'You want a language-agnostic tool that uses JSON or YAML to create and configure resources. ',
        ],
        install: "helm repo add pach https://helm.pachyderm.com helm repo update helm install pachd pach/pachyderm --set deployTarget=LOCAL",
        integratedIcons: [
            {
                name: 'Determined',
                image: '/images/determined.svg'
            },
            {
                name: 'Seldone Core',
                image: '/images/seldonecore.svg'
            }
        ]
    },
    {
        name: 'LakeFS',
        image: '/images/lakefs.svg',
        internet: 'https://lakefs.io/',
        github: 'https://github.com/treeverse/lakeFS',
        docs: 'https://docs.lakefs.io/',
        tags: [
            'Data versioning'
        ],
        note: 'LakeFS is Git for object storage buckets that work with any data size.',
        list: [
            'You want to transform your object storage into a Git-like repository.',
            'You want to manage your data lake like you manage your code.',
            'You want a data-format-agnostic tool. ',
            'You want to store metadata in a relational database to avoid duplicating data.',
            'You want to isolate data in a Data Lake without copying it',
            'You want to manage CI/CD of your data.',
            'You want a tool that works seamlessly with data frameworks like Airflow, Spark, Kafka, Presto Delta Lake, Databricks, etc.'
        ],
        watch: [
            'There is no straightforward way to delete files. The actual file deletion works through retention policies.',
            'LakeFS has no support for federated identities.',
            'Data usage auditing may be problematic as underlying object storage sees connections from the lakeFS gateway user. ',
        ],
        integratedIcons: [
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            }
        ]
    },
    {
        name: 'GitLab',
        image: '/images/gitlab.svg',
        internet: 'https://about.gitlab.com/',
        docs: 'https://docs.gitlab.com/',
        tags: [
            'Code versioning'
        ],
        note: 'GitLab is a web-based DevOps platform that provides free open and private Git repositories.',
        list: [
            "You want to extend Git's capabilities with software management and collaboration functionality.",
            'You want free hosted repositories or a free self-hosting platform. ',
            'You want built-in CI/CD for automating building, testing, and deploying your machine learning code.',
        ],
        watch: [
            'GitLab requires the use of Git as a version control system.'
        ],
        integratedIcons: [
            {
                name: 'DVC',
                image: '/images/dvc.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Git',
                image: '/images/git.svg'
            },
            {
                name: 'Polyaxos',
                image: '/images/polyaxon.svg'
            }
        ]
    },
    {
        name: 'Git',
        image: '/images/git.svg',
        internet: 'https://git-scm.com/',
        github: 'https://github.com/git/git',
        docs: 'https://git-scm.com/docs',
        tags: [
            'Code versioning'
        ],
        note: 'Git is an open-source tool used for tracking changes in files.',
        list: [
            'You want a free, lightweight, and popular tool for versioning your code.',
            'You want to take advantage of popular hosted and self-hosted platforms that extend Git capabilities, such as GitHub, GitLab, Bitbucket, etc.'
        ],
        watch: [
            'Git is generally not recommended for versioning large files such as datasets.'
        ],
        install: 'apt-get install git',
        integratedIcons: [
            {
                name: 'DVC',
                image: '/images/dvc.svg'
            },
            {
                name: 'GitLab',
                image: '/images/gitlab.svg'
            },
            {
                name: 'Apache Zeppelin',
                image: '/images/apachezeppelin.png'
            },
            {
                name: "Git LFS",
                image: '/images/gitlfs.svg'
            },
            {
                name: 'Orchest',
                image: '/images/orchest.svg'
            }
        ]
    },
    {
        name: 'Apache Airflow',
        image: '/images/apacheairflow.svg',
        internet: 'https://airflow.apache.org/',
        github: 'https://github.com/apache/airflow',
        docs: 'https://airflow.apache.org/docs/apache-airflow/stable/index.html',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Airflow is a platform created by the community to author, schedule, and monitor workflows programmatically.',
        list: [
            'You want to visualize pipelines running in production.',
            'You want to generate pipelines dynamically as Python code. ',
            'You want ETL pipelines to extract batch data from multiple sources and run data transformations.',
            'You want to automate machine learning model training.',
            'You want to create workflows as DAGs (Direct Acyclic Graphs), where each node is a task. ',
            'You want to configure pipelines as Python code. ',
            'You want to run a task on multiple workers managed by Celery, Dask, or Kubernetes.',
            'You want to define time limits for tasks or workflows to highlight anomalies or inefficiencies. ',
            'You want a developer-friendly environment and UI. ',
        ],
        watch: [
            'Orchestrates batch workflows that rely on time-based scheduling.',
            "Airflow doesn't manage event-based jobs.",
            'Airflow does not offer versioning for pipelines.',
            'Requires significant user customization to work safely in production workloads.',
            'By default, Airflow uses SQLite, which may experience data losses in production.',
            'By default, Airflow runs one task at a time with a serial executor. '
        ],
        install: 'pip install apache-airflow',
        integratedIcons: [
            {
                name: 'Dask',
                image: '/images/dask.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Kedro',
                image: '/images/kedro.svg'
            },
            {
                name: 'Dagster',
                image: '/images/dagster.svg'
            },
            {
                name: 'ZenML',
                image: '/images/zenml.svg'
            },
            {
                name: 'Ray',
                image: '/images/ray.svg'
            },
            {
                name: 'Evidently',
                image: '/images/evidently.png'
            },
            {
                name: 'Determined',
                image: '/images/determined.svg'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            },
            {
                name: 'LakeFS',
                image: '/images/lakefs.svg'
            }
        ]
    },
    {
        name: 'Argo Workflows',
        image: '/images/argoworkflows.svg',
        internet: 'https://argoproj.github.io/argo-workflows/',
        github: 'https://github.com/argoproj/argo-workflows',
        docs: 'https://argoproj.github.io/argo-workflows/quick-start/',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Argo Workflows is an open-source container-native workflow engine for orchestrating parallel jobs on Kubernetes.',
        list: [
            'You want to visualize pipelines running in production.',
            'You want to generate pipelines as YAML code.',
            'You want to deploy machine learning models.',
            'You want to adopt containers and Kubernetes for developing and deploying distributed applications.',
            'You want to create workflows as DAGs (Direct Acyclic Graphs). ',
            'You want to run each task on a separate Kubernetes pod.',
            'You want a workflow orchestrator that natively adds services like, secrets, roles, and volumes to Kubernetes.',
            'You want to configure infrastructure as YAML code',
            'You want resilience to container crashes.',
            'You want support for both time and event-based workflow execution.',
            'You want autoscaling features',
            'You want a workflow orchestrator that easily installs to existing Kubernetes clusters.',
        ],
        watch: [
            'Maintaining the YAML files for large projects is difficult.',
            'Requires expertise in Kubernetes to work safely in production workloads.',
            'The maintenance of an enterprise setup is complex.',
        ],
        install: "kubectl create ns argo kubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo-workflows/master/manifests/quick-start-postgres.yaml",
        integratedIcons: [
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Kedro',
                image: '/images/kedro.svg'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            }
        ]
    },
    {
        name: 'Luigi',
        image: '/images/lugi.png',
        github: 'https://github.com/spotify/luigi',
        docs: 'https://luigi.readthedocs.io/en/stable/',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Luigi is a Python package that helps you build complex pipelines of batch jobs.',
        list: [
            'You want to visualize pipelines running in production.',
            'You want to generate pipelines as Python code.',
            'You want to run long-running processes like dumping data to and from databases or ML algorithms.',
            'You want to create linear task pipelines that share input and output information.',
            'You want target-based workflows that are created as pipelines of tasks that share input and output information. ',
            'You want to configure pipelines as Python code.',
            'You want failure recovery features that allow recovering failed tasks without re-running the whole pipeline.',
            'You want an insightful visualizer',
            'You want GUI shows the status of the tasks.'
        ],
        watch: [
            'Hard to test.',
            'The central scheduler makes it challenging to parallelize tasks.',
            'Works better with linear tasks where one task output is another task input. Lots of branches and forks can slow the runtime a lot.',
            "There is no trigger, and pipelines won't start when all files are in place. You need a process (cronjob) to check that files are in place and start the pipeline."
        ],
        install: 'pip install luigi'
    },
    {
        name: 'Nextflow',
        image: '/images/Nextflow.png',
        internet: 'https://www.nextflow.io/',
        github: 'https://github.com/nextflow-io/nextflow',
        docs: 'https://www.nextflow.io/docs/latest/index.html',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Nextflow enables scalable and reproducible scientific workflows using software containers.',
        list: [
            'You want a workflow management system specializing in managing computational data analysis for fields such as Bioinformatics, Imaging, Physics, and Chemistry.',
            'You need a framework that supports domain-specific languages (DSL',
            'You need workflows that are highly portable and are computing platform agnostic',
            'You need workflows that are reproducible in different computing platforms.',
            'You want to support containerization',
            'You want to use Kubernetes.',
            'You want to execute tasks in parallel efficiently',
            'You want continuous checkpoints to allow workflows to resume from the last executed step.'
        ],
        watch: [
            'Nextflow is geared towards highly specific scientific computational workflows. It can be adapted for more general ML workflows.',
            'Bash may complicate using Nextflow for general ML workflows'
        ],
        install: 'curl -s https://get.nextflow.io | bash chmod +x nextflow sudo install nextflow /usr/local/bin/',
        integratedIcons: [
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            }
        ]
    },
    {
        name: 'Dagster',
        image: '/images/dagster.svg',
        internet: 'https://dagster.io/',
        github: 'https://github.com/dagster-io/dagster',
        docs: 'https://docs.dagster.io/getting-started',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Dagster is an orchestration platform for developing, producing, and observing data assets.',
        list: [
            'You want to create workflows as DAGs (Direct Acyclic Graphs)',
            'You need flexibility (manual, scheduled, modify individual jobs according to schedule) when running DAGs',
            'You want to define inputs and output for individual jobs more explicitly to streamline data movement between tasks',
            'You want an easy way to create dynamic workflows',
            'You want to generate pipelines as Python code. ',
            'You want to automate ML workflows.',
            'You want to separately abstract compute and storage',
        ],
        install: 'pip install dagster dagit',
        integratedIcons: [
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Apache Airflow',
                image: '/images/apacheairflow.svg'
            }
        ]
    },
    {
        name: 'Apache Beam',
        image: '/images/apache beam.svg',
        internet: 'https://beam.apache.org/',
        github: 'https://github.com/apache/beam',
        docs: 'https://beam.apache.org/documentation/',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Apache Beam is a batch and streaming data processing tool for mission-critical production workloads.',
        list: [
            'You want to create parallel-processing pipelines for either batch or streaming data.',
            'You want to use Java, Python, or Go SDKs for programming.',
            'You want to use runners that support Spark, Flink, Samza, Google Cloud Dataflow, Hazelcast Jet, Twister2 backends.',
            'You want portability by clearly separating programming and runtime layers (data processing engine agnostic). ',
            'You want autoscaling of the resources.',
            'You want an easy-to-maintain codebase.'
        ],
        watch: [
            'Beam capabilities are limited to which runners are used for execution'
        ],
        install: 'pip install apache-beam'
    },
    {
        name: 'ZenML',
        image: '/images/zenml.svg',
        internet: 'https://zenml.io/home',
        github: 'https://github.com/zenml-io/zenml',
        docs: 'https://docs.zenml.io/getting-started/introduction',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'ZenML is an extensible, open-source MLOps framework to create production-ready machine learning pipelines.',
        list: [
            'You want to create reproducible ML pipelines for production.',
            'You want an open-source framework that combines pipeline orchestrator, artifact, and metadata store for production pipelines.',
            'You want a cloud-agnostic framework that could be expanded with other tools.',
            'You want to migrate workflows from on-prem to cloud, keeping the pipelines and steps intact. ',
            'You want an orchestrator that is lightweight.'
        ],
        watch: [
            'The scalability of the created pipelines is limited to which backend tools have been used.',
            'Currently does not support DAG or Steps based declaration of workflows.'
        ],
        install: 'pip install zenml',
        integratedIcons: [
            {
                name: 'Apache Airflow',
                image: '/images/apacheairflow.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'MLflow',
                image: '/images/mlflow.svg'
            },
            {
                name: 'Seldone Core',
                image: '/images/seldonecore.svg'
            },
            {
                name: 'Weight & Biases',
                image: '/images/weights.svg'
            }
        ]
    },
    {
        name: 'Flyte',
        image: '/images/flyte.svg',
        internet: 'https://flyte.org/',
        github: 'https://github.com/flyteorg/flyte',
        docs: 'https://docs.flyte.org/en/latest/getting_started/index.html',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Flyte is a workflow automation platform for mission-critical data and machine learning processes at scale.',
        list: [
            'You want to create reproducible ML pipelines for production.',
            'You want a fault-tolerant platform with built-in fault recovery functions.',
            'You want an open-source Kubernetes-native workflow automation platform.',
            'You want a cloud-agnostic framework expandable with other tools.',
            'You want Python, Java, and Scala SDK support.',
            'You want a platform that natively understands data flow between tasks.',
            'You want a reliable platform in edge case deployments and large-scale workflows.',
            'You want support for DAG or Steps based declaration of workflows.'
        ],
        install: 'pip install flytekit',
        integratedIcons: [
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Dolt',
                image: '/images/Dolt.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            }
        ]
    },
    {
        name: 'Prefect',
        image: '/images/prefect.svg',
        internet: 'https://www.prefect.io/',
        github: 'https://github.com/prefecthq/prefect',
        docs: 'https://docs-v1.prefect.io/core/',
        tags: [
            'Pipeline orchestration'
        ],
        note: 'Prefect is an open-source workflow management system designed for modern infrastructure.',
        list: [
            'You want to create workflows as DAGs (Direct Acyclic Graphs).',
            'You want to define workflows as standalone objects.',
            'You need fast scheduling of DAGs.',
            'You want to explicitly define input and output for individual jobs to streamline data movement between tasks.',
            'You want to cache and persist inputs and outputs.',
            'You want a transform function that accepts both reference data (batch) and live data.',
            'You want an easy way to create dynamic workflows',
            'You want to generate pipelines as Python code.',
            'You want to automate ML workflows.'
        ],
        watch: [
            'The abstraction of computing and storage is limited, making local development tricky with large datasets.'
        ],
        install: 'pip install prefect',
        integratedIcons: [
            {
                name: 'kedro',
                image: '/images/kedro.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            }
        ]
    },
    {
        name: 'Ray',
        image: '/images/ray.svg',
        internet: 'https://www.ray.io/',
        github: 'https://github.com/ray-project/ray',
        docs: 'https://docs.ray.io/en/latest/',
        tags: [
            'Runtime engine',
            'Pipeline orchestration',
            'Model serving'
        ],
        note: 'Ray is an open-source tool that makes it simple to scale compute-intensive Python workloads.',
        list: [
            'You want to parallelize your machine learning computation across several machines.',
            'You want a general-purpose distributed computing library that supports heterogeneous workloads and is not restricted to structured data.',
            'You want to seamlessly scale your code from your local machine to a cluster. ',
            'You want high-level libraries that support model training, hyperparameter tuning, building pipelines, and serving models.'
        ],
        install: 'pip install ray',
        integratedIcons: [
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Apache Airflow',
                image: '/images/apacheairflow.svg'
            },
            {
                name: 'Dask',
                image: '/images/dask.svg'
            },
            {
                name: 'Horovod',
                image: '/images/horovod.svg'
            },
            {
                name: 'Alibi Detect',
                image: '/images/alibi detect.png'
            },
            {
                name: 'Prometheus',
                image: '/images/prometheus.svg'
            },
            {
                name: 'MLflow',
                image: '/images/mlflow.svg'
            },
            {
                name: 'Weights & Biases',
                image: '/images/weights.svg'
            }
        ]
    },
    {
        name: 'Orchest',
        image: '/images/orchest.svg',
        internet: 'https://www.orchest.io/',
        github: 'https://github.com/orchest/orchest',
        docs: 'https://docs.orchest.io/en/stable/',
        tags: ['Pipeline orchestration'],
        note: 'Orchest is a data pipeline creation tool that combines Jupyter notebooks and scripts with a visual pipeline editor.',
        list: [
            'You want a visual editor to create pipelines.',
            'You want to run Jupyter Notebooks as pipeline steps.',
            'You want to process pipeline steps in parallel for batch data.',
            'You want to use Python, R, or Julia programming languages for coding.',
            'You want to define input and output for individual steps explicitly.',
            'You want to schedule one-off or recurring pipeline runs.',
            'You want to easily spin-up services (Postgres database, Redis, TensorBoard, etc.) to run as part of your pipelines.'
        ],
        watch: [
            'The self-hosted version requires a Kubernetes cluster. It is possible to run Orchest locally with minikube.',
            'There is no built-in support for triggering pipeline runs based on events.'
        ],
        integratedIcons: [
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Git',
                image: '/images/git.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'TensorBoard',
                image: '/images/tensorBoard.png'
            }
        ]
    },
    {
        name: 'MLRun',
        image: '/images/mlrun.png',
        internet: 'https://www.mlrun.org/',
        github: 'https://github.com/mlrun/mlrun',
        docs: 'https://docs.mlrun.org/en/latest/',
        tags: [
            'Pipeline orchestration', 'Artifact tracking', 'Model registry', 'Model serving', 'Model monitoring'
        ],
        note: 'MLRun is an open-sourced MLOps framework that provides end-to-end machine learning management from R&D to production deployment.',
        list: [
            'You want to set up ML tasks (monitoring, data movement, scaling, versioning, CI/CD integration, and serving) as serverless functions.',
            'You want to visualize pipelines as DAGs (Direct Acyclic Graphs).',
            'You want ETL pipelines to extract batch data from multiple sources and run data transformations.',
            'You want an integrated feature store. ',
            'You want easy built-in functions to test production pipelines locally before deployment.',
            'You want a marketplace for ML functions to improve your pipelines with minimal engineering efforts.'
        ],
        watch: [
            'The self-hosted version requires a Kubernetes cluster. It is possible to run MLRun locally with Docker Desktop or minikube.',
            'Many functions and services are only available out of the box in managed service offered by Iguazio.'
        ],
        install: ' kubectl create namespace mlrun  helm repo add v3io-stable https://v3io.github.io/helm-charts/stable helm repo update kubectl --namespace mlrun create secret docker-registry registry-credentials     --docker-server <your-registry-server>     --docker-username <your-username>     --docker-password <your-password>     --docker-email <your-email> helm --namespace mlrun     install mlrun-kit     --wait     --timeout 960s     --set global.registry.url=<registry-url>     --set global.registry.secretName=registry-credentials     v3io-stable/mlrun-kit',
        integratedIcons: [
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: ' Nuclio',
                image: '/images/nuclio.png'
            },
            {
                name: 'Dask',
                image: '/images/dask.svg'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'Horovod',
                image: '/images/horovod.svg'
            }
        ]
    },
    {
        name: 'Nuclio',
        image: '/images/nuclio.png',
        internet: 'https://nuclio.io/',
        github: 'https://github.com/nuclio/nuclio',
        docs: 'https://nuclio.io/docs/latest/',
        tags: [
            'Runtime engine', 'Model serving'
        ],
        note: 'Nuclio is a high-performance serverless framework focused on data, I/O, and compute-intensive workloads.',
        list: [
            'You want to set up ML tasks (data processing, stream processing, hyperparameter tuning, and serving) as serverless functions.',
            'You need support for both CPU and GPU execution.',
            'You want to create containerized functions directly from a Jupyter Notebook using the magic command %nuclio.',
            'You are using Kubernetes.'
        ],
        integratedIcons: [
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'MLRun',
                image: '/images/mlrun.png'
            }
        ]
    },
    {
        name: 'Dask',
        image: '/images/dask.svg',
        internet: 'https://dask.org/',
        github: 'https://github.com/dask/dask',
        docs: 'https://docs.dask.org/en/stable/',
        tags: [
            'Runtime engine'
        ],
        note: 'Dask is a flexible library for parallel computing in Python.',
        list: [
            'You are working with large-scale data analytics.',
            'You want a familiar interface that mimics NumPy, Pandas, and PySpark for drop-in replacement.',
            'You want to run the same Pandas or NumPy code locally or on a cluster.'
        ],
        watch: [
            'It does not support deep learning'
        ],
        install: 'python -m pip install "dask[complete]"',
        integratedIcons: [
            {
                name: 'Apache Airflow',
                image: '/images/apacheairflow.svg'
            },
            {
                name: 'Ray',
                image: '/images/ray.svg'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'MLRun',
                image: '/images/mlrun.png'
            }
        ]
    },
    {
        name: 'Horovod',
        image: '/images/horovod.svg',
        internet: 'https://horovod.ai/',
        github: 'https://github.com/horovod/horovod',
        docs: 'https://horovod.readthedocs.io/en/stable/',
        tags: [
            'Runtime engine'
        ],
        note: 'Horovod makes it easy to train models across many GPUs in parallel.',
        list: [
            'You are training large deep learning models that would benefit from GPU parallelization.',
            'You want compatibility with TensorFlow, Keras, PyTorch, and Apache MXNet',
            'You want the flexibility to run a script adapted to work with Horovod in a single GPU, multiple GPUs, or multiple nodes without any further code changes.'
        ],
        watch: [
            'You must reinstall Horovod when upgrading or downgrading TensorFlow, Keras, or PyTorch. ',
            'Requires adapting your training script.',
            'Serving the model requires optimization to remove references to Horovod.'
        ],
        install: 'pip install horovod',
        integratedIcons: [
            {
                name: 'Ray',
                image: '/images/ray.svg'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            },
            {
                name: 'Apache Spark',
                image: '/images/apache spark.svg'
            },
            {
                name: 'MLRun',
                image: '/images/mlrun.png'
            }
        ]
    },
    {
        name: 'Apache Spark',
        image: '/images/apache spark.svg',
        internet: 'https://spark.apache.org/',
        github: 'https://github.com/apache/spark',
        docs: 'https://spark.apache.org/docs/latest/',
        tags: [
            'Runtime engine'
        ],
        note: 'Apache Spark is a data processing framework for large datasets and distributed computing',
        list: [
            'You are working with big data (large datasets).',
            'You would like to parallelize computation across multiple machines',
            'You want fast large-scale data processing.',
            'You want a machine learning-specific API and many operators that facilitate transforming data'
        ],
        watch: [
            'Requires clusters with higher RAM since it stores datasets in memory.',
            'Higher infrastructure and setup costs.'
        ],
        integratedIcons: [
            {
                name: 'Dagster',
                image: '/images/dagster.svg'
            },
            {
                name: 'Flyte',
                image: '/images/flyte.svg'
            },
            {
                name: 'Jupyter',
                image: '/images/jupyter.svg'
            },
            {
                name: 'Polynote',
                image: '/images/polynote.svg'
            },
            {
                name: 'Apache Zeppelin',
                image: '/images/apachezeppelin.png'
            },
            {
                name: 'Polyaxon',
                image: '/images/polyaxon.svg'
            },
            {
                name: 'LakeFS',
                image: '/images/lakefs.svg'
            },
            {
                name: 'Horovod',
                image: '/images/horovod.svg'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'MLRun',
                image: '/images/mlrun.png'
            }
        ]
    },
    {
        name: 'Seldone Core',
        image: '/images/seldonecore.svg',
        internet: 'https://www.seldon.io/',
        github: 'https://github.com/SeldonIO/seldon-core/',
        docs: 'https://docs.seldon.io/projects/seldon-core/en/latest/',
        tags: [
            'Model serving'
        ],
        note: 'Seldon Core is an open-source platform to deploy machine learning models on Kubernetes at a massive scale',
        list: [
            'You want a serving framework that supports a wide range of ML frameworks.',
            'You want a serving framework that works on multiple implementation languages (R, Julia, C++, Java, and Python).',
            'You want a Kubernetes-native model serving platform',
            'You want a cloud-agnostic framework.',
            'You want pre-built Docker images to get models in production.',
            'You want built-in model monitoring features',
            'You need minimal code editing to start serving the model.',
            'You want integrated Nvidia NVIDIA Triton.'
        ],
        watch: [
            'It is not suited for edge-based or IoT model serving.',
            'Running and maintaining Kubernetes clusters for model serving may not always be optimal.'
        ],
        install: 'kubectl create namespace seldon-system helm install seldon-core seldon-core-operator       --repo https://storage.googleapis.com/seldon-charts       --set usageMetrics.enabled=true       --namespace seldon-system       --set istio.enabled=true',
        integratedIcons: [
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: 'ZenML',
                image: '/images/zenml.svg'
            },
            {
                name: 'Prometheus',
                image: '/images/prometheus.svg'
            },
            {
                name: 'Alibi Detect',
                image: '/images/alibi detect.png'
            },
            {
                name: 'Kubernetes',
                image: '/images/kubernetes.svg'
            },
            {
                name: 'Determined',
                image: '/images/determined.svg'
            },
            {
                name: ' Pachyderm',
                image: '/images/pachyderm.svg'
            }
        ]
    },
    {
        name: 'BentoML',
        image: '/images/bentoml.svg',
        internet: 'https://www.bentoml.com/',
        github: 'https://github.com/bentoml/BentoML',
        docs: 'https://docs.bentoml.org/en/latest/',
        tags: [
            'Model serving'
        ],
        note: 'BentoML is an open platform that simplifies ML model deployment and enables you to serve your models at a production scale in minutes.',
        list: [
            'You want a serving framework that supports a wide range of ML frameworks.',
            'You want an end-to-end model serving solution which provides a model API server, model packaging, management, deployment automation, and offline batch serving features.',
            'You want to do preprocessing and post-processing in serving endpoints.',
            'You want built-in model monitoring features.',
            'You wand support for adaptive micro-batching.',
            'You want to run on Google Colab.'
        ],
        watch: [
            'Currently, there is no multi-language support. Only Python is supported.',
            'BentoML does not handle horizontal scaling. Users have to separately build Kubernetes-based solutions or use cloud platforms like AWS Lambda, AWS ECS, and Google Cloud Run to scale served models.'
        ],
        install: 'pip install bentoml',
        integratedIcons: [
            {
                name: 'Kubeflow',
                image: '/images/kubeflow.svg'
            },
            {
                name: ' Prometheus',
                image: '/images/prometheus.svg'
            },
            {
                name: ' MLflow',
                image: '/images/mlflow.svg'
            }
        ]
    },
    {
        name: 'NVIDIA Triton',
        image: '/images/NVIDIA Triton.svg',
        internet: 'https://developer.nvidia.com/nvidia-triton-inference-server',
        github: 'https://github.com/triton-inference-server/server',
        docs: 'https://github.com/triton-inference-server/server#readme',
        tags: [
            'Model serving'
        ],
        note: 'NVIDIA Triton Inference Server is an open-source inference serving software that helps standardize model deployment and execution and delivers fast and scalable AI in production.',
        list: [
            'You want a serving framework that supports a wide range of ML frameworks.',
            'You want a model serving solution which provides tight integration with the hardware stack, model versioning, and dynamic batching.',
            'You want to autoscale GPU instances. ',
            'You want to use Kubernetes on GPU instances.',
            'You want to minimize model initialization times in inference workloads.',
            'You want built-in model monitoring features.',
            'You want to optimize GPU instance utilization.'
        ],
        watch: [
            'Requires supported NVIDIA GPUs.'
        ],
        integratedIcons: [
            {
                name: 'KServe',
                image: '/images/kserve.svg'
            }
        ]
    },
    {
        name: ' TensorFlow Serving',
        image: '/images/tensoflow serving.svg',
        internet: 'https://www.tensorflow.org/tfx/guide/serving',
        github: 'https://github.com/tensorflow/serving',
        docs: 'https://www.tensorflow.org/tfx/guide/serving',
        tags: [
            'Model serving'
        ],
        note: 'TensorFlow Serving is a flexible, high-performance serving system for machine learning models designed for production environments',
        list: [
            'You want a serving framework dedicated to TensorFlow models.',
            'You want to deploy a trained model as an endpoint.',
            'You want efficient server architecture to serve a model to a large user pool simultaneously.',
            'You want built-in model monitoring features.',
            'You want built-in model versioning features.',
            'You want to optimize hardware utilization by batching requests to a served model.',
            'You want a REST and gRPC API endpoint to the served model.',
            'You want support for exporting metrics to Prometheus.'
        ],
        watch : [
            'There is no way to ensure zero downtime when updating new models or existing ones.'
        ],
        install : 'echo "deb [arch=amd64] http://storage.googleapis.com/tensorflow-serving-apt stable tensorflow-model-server tensorflow-model-server-universal" | sudo tee /etc/apt/sources.list.d/tensorflow-serving.list  curl https://storage.googleapis.com/tensorflow-serving-apt/tensorflow-serving.release.pub.gpg | sudo apt-key add - apt-get update && apt-get install tensorflow-model-server',
        integratedIcons : [
            {
                name : 'Kubeflow',
                image : '/images/kubeflow.svg'
            },
            {
                name : 'Kubernetes',
                image : '/images/kubernetes.svg'
            }
        ]
    },
    {
        name : 'Kserve',
        image : '/images/kserve.svg',
        internet : 'https://kserve.github.io/website/master/',
        github : 'https://github.com/kserve/website',
        docs : 'https://kserve.github.io/website/master/get_started/',
        tags : [
            'Model serving'
        ],
        note : 'KServe is a highly scalable and standards-based model inference platform on Kubernetes.',
        list : [
            'You want serverless inferencing on Kubernetes.',
            'You want support for TensorFlow, XGBoost, scikit-learn, PyTorch, and ONNX.',
            'You want to autoscale GPU instances (up to scale to zero)',
            'You want pre-built Docker images for frameworks to get models in production.',
            'You want to do preprocessing and post-processing of data.',
            'You want built-in model monitoring features with Prometheus.',
            'You want out-of-the-box Istio integration',
            'You want built-in canary deployments.'
        ],
        watch : [
            'The default serving method is HTTP-based. Non-JSON input/outputs require a custom transformer and implementation.',
            'It does not support A/B tests and Mac authentication bypass out-of-the-box.',
            'KServe deploys one model per inference, limiting scalability to the available CPUs and GPUs.'
        ],
        install : 'curl -s "https://raw.githubusercontent.com/kserve/kserve/release-0.8/hack/quick_install.sh" | bash',
        integratedIcons : [
            {
                name : 'Kubeflow',
                image : '/images/kubeflow.svg'
            },
            {
                name : 'Kubernetes',
                image : '/images/kubernetes.svg'
            },
            {
                name : 'Knative',
                image : '/images/Knative.svg'
            },
            {
                name : 'Alibi Detect',
                image : '/images/alibi detect.png'
            },
            {
                name : 'MLflow',
                image : '/images/mlflow.svg'
            },
            {
                name : 'NVIDIA Triton',
                image : '/images/NVIDIA Triton.svg'
            },
            {
                name : 'Prometheus',
                image : '/images/prometheus.svg'
            }
        ]
    },
    {
        name : ' FastAPI',
        image : '/images/fastapi.svg',
        internet : 'https://fastapi.tiangolo.com/',
        github : 'https://github.com/tiangolo/fastapi',
        docs : 'https://fastapi.tiangolo.com/',
        tags : [
            'Model serving'
        ],
        note : 'FastAPI is a modern, high-performance web framework for building APIs with Python.',
        list : [
            'You want a simple syntax that makes creating endpoints fast.',
            'You want to have automatic API docs based on Swagger or ReDoc.',
        ],
        watch : [
            'FastAPI does not provide model management features as dedicated model servers do, such as model versioning, scaling, and A/B testing.',
            'FastAPI creates APIs, but it does not come with a webserver. You will need to deploy it with a Python webserver.'
        ],
        install : 'pip install fastapi',
        integratedIcons : [
            {
                name : 'Cog'
            },
            {
                name : 'Polyaxon',
                image : '/images/polyaxon.svg'
            }
        ]
    },
    {
        name : 'TorchServe',
        image : '/images/torchserve.svg',
        internet : 'https://pytorch.org/serve/',
        github : 'https://github.com/pytorch/serve',
        docs : 'https://pytorch.org/serve/',
        tags : ['Model serving'],
        note : 'TorchServe is a flexible and easy-to-use tool for serving and scaling PyTorch models in production.',
        list : [
            'You want to serve PyTorch models and do not need a framework-agnostic serving tool.',
            'You want integration with popular tools such as KServe, Kubeflow, MLflow, Sagemaker, and Vertex AI.',
            'You want REST and gRPC support for batch inference.',
            'You want to version and scale your models.',
            'You want support for exporting metrics to Prometheus.',
            'You want to serve an ensemble of PyTorch models and Python functions executed as a DAG defined by a workflow.'
        ],
        install : 'git clone https://github.com/pytorch/serve.git  cd serve  python ./ts_scripts/install_dependencies.py --cuda=cu111  pip install torchserve torch-model-archiver torch-workflow-archiver',
        integratedIcons : [
            {
                name : 'Prometheus',
                image : '/images/prometheus.svg'
            },
            {
                name : 'MLflow',
                image : '/images/mlflow.svg'
            }
        ]
    },
    {
        name : 'Cog',
        github : 'https://github.com/replicate/cog',
        tags : ['Model serving'],
        note : 'Cog is an open-source tool that lets you package machine learning models in a standard, production-ready container.',
        list : [
            'You want to package your model in a Docker container without writing a Dockerfile.',
            'You want GPU, CUDA, and cuDNN support without worrying about getting the setup and compatibility right.',
            'You want an automatic and configurable FastAPI endpoint.',
            'You want an out-of-the-box queue for serving long-running models based on Redis.'
        ],
        integratedIcons : [
            {
                name : 'FastAPI',
                image : '/images/fastapi.svg'
            }
        ]
    },
    {
        name : 'Prometheus',
        image : '/images/prometheus.svg',
        internet : 'https://prometheus.io/',
        github : 'https://github.com/prometheus/prometheus',
        docs : 'https://prometheus.io/docs/introduction/overview/',
        tags : ['Model monitoring'],
        note : 'Prometheus is an open-source system monitoring and alerting toolkit',
        list : [
            'You want a general-purpose lightweight library to log metrics about your system available in many languages.',
            'You want a server that automatically collects and stores metrics data from any number of targets.',
            'You want a long list of tools that export existing metrics as Prometheus metrics with out-of-the-box support.',
            'You want to store metrics locally or have many integration options for remote storage.'
        ],
        watch : [
            'You will likely use Prometheus with complementary tools that help calculate data and model metrics. You may also use a tool to create dashboards - Grafana is a popular option.',
            'If tools in your ML stack automatically collect metrics and provide support for exporting them to Prometheus, integration is easy. Otherwise, you will need to define which metrics to log and add custom code to log that data.'
        ],
        integratedIcons :[
            {
                name : 'Seldone Core',
                image : '/images/seldonecore.svg'
            },
            {
                name : 'BentoML',
                image : '/images/bentoml.svg',
            },
            {
                name : 'KServe',
                image : '/images/kserve.svg'
            },
            {
                name : 'TorchServe',
                image : '/images/torchserve.svg'
            },
            {
                name : 'Ray',
                image : '/images/ray.svg'
            },
            {
                name : 'Grafana',
                image : '/images/Grafana.svg'
            },
            {
                name : 'Kubernetes',
                image : '/images/kubernetes.svg'
            },
            {
                name : 'Evidently',
                image : '/images/evidently.png'
            },
            {
                name : 'MLflow',
                image : '/images/mlflow.svg'
            },
            {
                name : 'Determined',
                image : '/images/determined.svg'
            }
        ]
    },
    {
        name : 'Grafana',
        image : '/images/Grafana.svg',
        internet : 'https://grafana.com/',
        github : 'https://github.com/grafana/grafana',
        docs : 'https://grafana.com/docs/grafana/latest/',
        tags : ['Model monitoring'],
        note :'Grafana is an open-source tool for online system analytics & monitoring.',
        list : [
            'You want to create interactive dashboards, graphs, and alerts to improve your system monitoring.',
            'You want integration with several popular data sources such as Prometheus, Postgres, MySQL, etc.'
        ],
        watch : [
            'Grafana is a general-purpose tool for creating dashboards and alerts and should be used next to tools that calculate and log information about your models and data.'
        ],
        install : 'sudo apt-get install -y adduser libfontconfig1 wget https://dl.grafana.com/oss/release/grafana_8.5.5_amd64.deb sudo dpkg -i grafana_8.5.5_amd64.deb',
        integratedIcons : [
            {
                name : 'Prometheus',
                image : '/images/prometheus.svg'
            },
            {
                name : ' Kubernetes',
                image : '/images/kubernetes.svg'
            }
        ]
    },
    {
        name : 'Evidently',
        image : '/images/evidently.png',
        internet : 'https://evidentlyai.com/',
        github : 'https://github.com/evidentlyai/evidently',
        docs : 'https://docs.evidentlyai.com/',
        tags : ['Model monitoring'],
        note : 'Evidently is a tool for analyzing and tracking data and ML model quality throughout the model lifecycle.',
        list : [
            'You want to calculate data drift, target drift, and model performance as part of a pipeline or monitor deployed models.',
            'You want out-of-the-box interactive reports.',
            'You want easy integration with Grafana, Apache Airflow, or MLflow.'
        ],
        install : 'pip install evidently',
        integratedIcons : [
            {
                name : 'Prometheus',
                image : '/images/prometheus.svg'
            },
            {
                name : 'Apache Airflow',
                image : '/images/apacheairflow.svg'
            },
            {
                name : ' MLflow',
                image : '/images/mlflow.svg'
            },
            {
                name : 'Jupyter',
                image : '/images/jupyter.svg'
            }
        ]
    },
    {
        name : 'Alibi Detect',
        image : '/images/alibi detect.png',
        github : 'https://github.com/SeldonIO/alibi-detect',
        docs : 'https://docs.seldon.io/projects/alibi-detect/en/stable/',
        tags : ['Model monitoring'],
        note : 'Alibi Detect is an open-source Python library focused on outlier, adversarial, and drift detection.',
        list : [
            'You want to monitor your deployed model to detect data drift, outlier observations far from your training data, and adversarial examples that maliciously cause your model to make prediction mistakes.',
            'You want a tool that has direct integration with Seldon Core and KServe.'
        ],
        watch : [
            'Alibi Detect provides sophisticated detection algorithms out-of-the-box, but you may need to write custom code to integrate them into your monitoring system.'
        ],
        install : 'pip install alibi-detect',
        integratedIcons : [
            {
                name : 'Seldone Core',
                image : '/images/seldonecore.svg'
            },
            {
                name : 'KServe',
                image : '/images/kserve.svg'
            },
            {
                name : 'Ray',
                image : '/images/ray.svg'
            }
        ]
    }
]

export default response;