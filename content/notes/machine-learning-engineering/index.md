---
title: Machine Learning Engineering
lastmod: 2021-09-23T21:55:41.780630771Z
math: true
growth: budding
---

<div class="box yellow word" data-word="Disclaimer">

These are notes for the 2AMM15 course at TU/e. This content is based on the [course material](https://ml-course.github.io/master/), and thus, may be copyrighted.

</div>

## Introduction

### What is ML?
- Learn to perform a task, based on experience (examples) $X$, minimizing error  $\mathcal{E}$. E.g. recognize a flower in an image as accurately as possible
- Learn a model $f$ with some parameters $\theta$ that produces the right output $y$
- Part of a much larger system that provides the data $X$ in the right format

$$f_{\theta}(X) = y$$
$$\underset{\theta}{\operatorname{argmin}} \mathcal{E}(f_{\theta}(X))$$

### Inductive bias
- We put assumptions into the model: **inductive bias** $b$.
  - What should the model look like?
    - Mimick human brain: Neural Networks
    - Logical combination of inputs: Decision Trees, Linear Models
    - Remember similar examples: Nearest Neighbors, SVMs
    - Probability distribution: Bayesian models
  - Hyper parameters: user defined settings. E.g. depth of tree, network architecture.
  - Assumptions about the data distribution. E.g. $X \sim N(\mu,\sigma)$.
- We can transfer knowledge from previous tasks: $f_1, f_2, f_3, ... \Longrightarrow f_{new}$.
  - Choose the right model, hyper parameters
  - Reuse previously learned values for model parameters $\theta$ 
- In short: $\underset{\theta,b}{\operatorname{argmin}} \mathcal{E}(f_{\theta, b}(X))$

### Machine Learning vs Statistics

- Both:
  - Predictions of natural phenomena
- Statistics
  - Help humans understand the world
  - Assume data is generated according to an understandable model
- Machine learning
  - Automate a task entirely
  - Assume data generation process is unknown
  - Engineering-oriented, less mathematical theory

### Types of Machine Learning

- Many times, we combine more than one type

**Supervised Machine Learning**
- Learn a model $f$ from labeled data $(X, y)$, i.e., from ground truth
- Supervised: we know the correct/desired outcome (label)
- **Classification**
  - Predict a class label (category), discrete and unordered
    - Can be **binary** (e.g. spam/not spam) or **multi-class** (e.g. letter recognition)
    - Many classifiers can return a **confidence** per class
  - The predictions of the model yield a **decision boundary** separating the classes
- **Regression**
  - Predict a continuous, numeric value. E.g. temperature.
  - Target variable is numeric
  - Some algorithms can return a **confidence interval**
  - Find relationship between predictors and the target

**Semi-Supervised Learning**
- Learn a model rom few labeled and many unlabeled examples
- Unlabeled examples add information about which new examples are likely to occur
  
**Unsupervised Machine Learning**
- Explore the structure of the data $X$ to extract meaningful information
- Given inputs $X$, find which ones are special, similar, anomalous, etc
- Unlabeled data, or data with unknown structure
- There exist many subtypes
- **Clustering**
  - Organize information into meaningful subgroups (clusters)
  - Objects in cluster share certain degree of similarity and dissimilarity to other clusters
  - E.g. distinguish different types of customers
- **Dimensionality reduction**
  - Data can be very high-dimensional and difficult to understand, learn from, store, etc
  - Can compress the data into fewer dimensions, while retaining most of the information
  - Contrary to feature selection, the new features lose their original meaning
  - The new representation can bne a lot easier to model and visualize

**Reinforcement Learning**
- Develop an agent that improves its performance based on interactions with the environment. E.g. Chess, Go, etc
- Search a large space of actions and states
- **Reward function** defines how well a series of actions works
- Learn a series of actions (policy) that maximizes reward through exploration

### Learning = Representation + Evaluation + Optimization

ML algorithms consist of 3 components:

- **Representation**: a model $f_{\theta}$ must be represented in a formal language that the computer can handle
  - Defines the "concepts" it can learn, the **hypothesis space**
  - E.g. a decision tree, neural network, set of annotated data points
- **Evaluation**: an internal way to choose one hypothesis over the other
  - Objective function, scoring function, loss function $\mathcal{L}(f_{\theta})$
  - E.g. difference between correct output and predictions
- **Optimization**: an efficient way to search the hypothesis space
  - Start from simple hypothesis, extend (relax) if it doesn't fit the data
  - Start with initial set of model parameters, gradually refine them
  - Many methods, differing in speed of learning, number of optima, etc

**Example (neural networks)**
- Representation: 2 model parameter ($\theta_0,\theta_1$)
- Evaluation: a loss function $\mathcal{L}(f_{\theta})$ computes how good the predictions are
  - Estimated on a set of training data with the correct predictions
  - We can't see the full surface, only evaluate specific sets of parameters
- Optimization: find the optimal set of parameters
  - Usually a type of search in the hypothesis space
  -  E.g. gradient descent: $\theta_i^{new} = \theta_i + \frac{\mathcal{L}(f_{\theta})}{\partial \theta_i} $

### Overfitting and underfitting

- Easy to create a model that is 100% accurate on training data, but very bad on new data
- **Overfitting**: building a model that is too complex for the amount of data we have
  - Model peculiarities in training data (noise, biases, etc)
  - Solve by making model simpler (regularization), or getting more data
  - Most algorithms have hyper parameters that allow regularization
- **Underfitting**: building a model that is too simple given the complexity of the data
  - Use a more complex model
- There are techniques to detect overfitting (e.g. bias-variance analysis)
- Build ensembles of many models to overcome both underfitting and overfitting

### Model Selection

- Next to the internal loss function, we need an external evaluation function
  - Feedback signal: are we actually learning the right thing? Are we under/overfitting?
  - Carefully choose to fit the application
  - Needed to select between models (and hyper parameters settings)
- Data needs to be split into training and test sets
  - Optimize model parameters on the training set
  - Evaluate on independent test set
- Avoid data leakage:
  - Never optimize hyper parameters settings on test data
  - Never choose preprocessing techniques based on the test data
- To optimize hyper parameters and preprocessing as well, set aside part of training set as a validation set: keep it hidden during all training
- Do not evaluate final models on training data, except for:
  - Tracking whether the optimizer converges (learning curves)
  - Diagnosing under/overfitting:
    - Underfitting: **low training and test score**
    - Overfitting: **high training score, low test score**
- On small datasets, use multiple train-test splits to avoid sampling bias. E.g. use cross validation

### Better Models

- Algorithms need to correctly transform the inputs to the right outputs
- A lot depends on how we present the data to the algorithm
  - Transform data to better representation (aka encoding or embedding)
  - Can be done E2E (e.g. deep learning) or by first preprocessing the data (e.g. feature selection/generation)

### Feature Engineering

- Most machine learning techniques require humans to build a good representation of the data
- Especially when data is naturally structured. E.g. table with meaningful columns
- Feature engineering is often still necessary to get the best results
  - Feature selection, dimensionality reduction, scaling, etc
  - Applied machine learning is basically feature engineering
- Nothing beats domain knowledge (when available) to get a good representation

**Learning Data Transformations E2E**
- It's hard to extract good features for unstructured data. E.g. images, text
- Deep learning: learn your own representation (embedding) of the data
  - Through multiple layers of representation (e.g. layers of neurons)
  - Each layer transforms the data a bit, based on what reduces the error

**Curse of Dimensionality**
- Adding lots of features and letting the model figure it out does not work
- Our assumptions (inductive biases) often fail in high dimensions:
  - Randomly shaped points in an n-dimensional space. E.g. a unit hypercube
  - Almost all points become outliers at the edge of the space
  - Distances between any two points will become almost identical
- **Consequences**
  - For every dimension (feature) you add, you need exponentially more data to avoid sparseness
  - Affects any algorithm that is based on distances. E.g. kNN, SVM, kernel-based methods, tree-based methods, etc
  - Blessing of non-uniformity: on many applications, the data lives in a very small subspace
    - We can drastically improve performance by selecting features or using lower-dimensional data representations

### More data can beat a cleverer algorithm

- More data reduces the change of overfitting
- Less sparse data reduces the curse of dimensionality
- Non-parametric models: number of model parameters grows with amount of data
  - Tree-based techniques, kNN, SVM, etc
  - they can learn any model given sufficient data but can get stuck in local minimums
- Parametric (fixed size) models: fixed number of parameters
  - Linear models, neural networks, etc
  - Can be given a huge number of parameters to benefit from more data
  - Deep learning models can have millions of weights, learn almost any function
- The bottleneck is moving from data to compute/scalability

### Building ML systems

1. **Preprocessing**: raw data is rarely ideal for learning
   - Feature scaling: bring values in same range
   - Encoding: make categorical features numeric
   - Discretization: make numerical features categorical
   - Label imbalance correction. E.g. downsampling
   - Feature selection: remove uninteresting/correlated features
   - Dimensionality reduction can also make data easier to learn
   - Using pre-learned embeddings. E.g. word to vector, image to vector
2. **Learning and evaluating**
    data in training, validation and test sets
3. **Prediction**
   - Final optimized model can be used for prediction
   - Expected performance is performance measured on independent test set
- Together they form a workflow or **pipeline**
- There exist ML methods to automatically build and tune these pipelines
- Need to optimize pipelines continuously
  - **Concept drift**: the phenomenon you are modelling can change over time
  - **Feedback**: models' predictions may change future data

## k-Nearest Neighbor

- Make a prediction: find the $k$ closest data points in the training dataset
  - Classification: predict the most frequent class of the $k$ neighbors
  - Regression: predict the average of the values of the $k$ neighbors
  - Both can be weighted by the distance to each neighbor
- Main hyper parameters:
  - Number of neighbors $k$, regularizer
  - Choice of distance function: Euclidean, etc
  - Weighting scheme: uniform, distance, etc
- Model:
  - Representation: store training examples. E.g. in kd-tree
  - Typical loss functions:
    - Classification: accuracy (zero-one loss)
    - Regression: root mean squared error
  - Optimization: none (no model parameters to tune)

### Classification

- $k=1$: look at the nearest neighbor only. Likely to overfit
- $k>1$: do a vote and return the majority or confidence value for each class
- Using
  - Few neighbors => high model complexity, complicated decision boundary
  - Many neighbors => low model complexity, smoother decision boundary
- Nearest Shrunken Centroid
  - Alternative to kNN neighbor
  - Nearest centroid: represents each class by the centroid of its members
    - Parametric model, while kNN is non-parametric
  - Regularization is possible with the shrink threshold parameter
    - Shrinks (scales) each feature value by within class variance of that feature
    - Soft thresholding: if feature value falls below threshold, it is set to 0
    - Effectively removes noisy features
  - Suffers when data is not "convex"

**Scalability**
- With n = nr examples and p = nr features
- Nearest shrunken threshold
  - Fit: $O(n * p)$
  - Memory: $O(nrclasses * p)$
  - Predict: $O(nrclasses * p)$
- Nearest neighbors (naive)
  - Fit: $0$
  - Memory: $O(n * p)$
  - Predict: $O(n * p)$
- Nearest neighbors (with KD trees)
  - Fit: $O(p * n log n)$
  - Memory: $O(n * p)$
  - Predict: $O(k * log n)$

### Regression

- $k=1$: return the target value of the nearest neighbor. Likely to overfit
- $k>1$: returns the mean of the target value of the $k$ nearest neighbors
- Small $k$ leads to overly complex (overfitting) model
- Larger $k$ tens to yield a smoother fit

### Pros and Cons

- Easy to understand and works well in many settings
- Training is very fast, but predicting is slow for large datasets
- Bad at high-dimensional and sparse data (Curse of Dimensionality)
- Nearest centroid is a useful parametric alternative, but only if data is near linearly separable

## Linear Models

- Predictions using a linear function of the input $X$: $f_{\mathbf{w}}(\mathbf{x}) = \sum_{i=1}^{p} w_i \cdot x_i + w_{0}$
- Learn $w$ from $X$, given a loss function $\mathcal{L}$: $\underset{\mathbf{w}}{\operatorname{argmin}} \mathcal{L}(f_\mathbf{w}(X))$
- Many algorithms with different loss functions: Least squares, ridge, lasso, logistic regression, linear SVMs, etc
- Can be very powerful (and fast), especially for large datasets with many features
- Can be generalized to learn non-linear patterns: Generalized Linear Models
  - Features can be augmented with polynomials of the original features
  - Features can be transformed according to a distribution (Poisson, Tweedie, Gamma, etc)
  - Some linear models (e.g. SVMs) can be kernelized to learn non-linear functions

### Regression

- Prediction formula for input features $X$:
  - $w_1$...$w_n$ usually called **weights** or **coefficients**, $w_0$ the **bias** or **intercept**
  - Assumes that errors are $N(0,\sigma)$

$$\hat{y} = \mathbf{w}\mathbf{x} + w_0 = \sum_{i=1}^{p} w_i \cdot x_i + w_0 = w_1 \cdot x_1 + w_2 \cdot x_2 + ... + w_p \cdot x_p + w_0 $$

**Linear Regression (Ordinary Least Squares)**
- Loss function is the sum of squared errors (SSE) between predictions $\hat{y}_i$ and true regression targets $y_i$ on the training set

$$\mathcal{L}\_{SSE} = \sum\_{n=1}^{N} (y_n-\hat{y}\_n)^2 = \sum\_{n=1}^{N} (y\_n-(\mathbf{w}\mathbf{x\_n} + w\_0))^2$$

**TODO**

## Kernelization

## Model Selection

## Ensemble Learning

## Decision Trees

- Representation: assume we can represent the concept we wanna learn with a decision tree
  - Repeatedly split the data based on one feature at a time.
  - Oblique trees can split on combinations of features.
- Evaluation/loss: one tree is better than another tree according to some heuristic
  - Classification: instances in a leaf are all of the same class (pure leafs)
  - Regression: instances in a leaf have values close to each other
- Optimization: recursive, heuristic greedy search (Hunt's algorithm)
  - Make first split based heuristic
  - In each branch, repeat splitting in the same way

**Heuristics**
- We start from a dataset of $n$ points 

**TODO**

## Data Preprocessing

## Bayesian Learning

## Neural Networks

## Convolutional Neural Networks

## Neural Networks for Text
