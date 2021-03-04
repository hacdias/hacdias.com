---
draft: true
title: Machine Learning Engineering
date: 2021-03-04T09:44:12.108105254Z
math: true
---

Exam Topics: https://canvas.tue.nl/courses/16111/pages/exam-topics

## Intro

> Learning algorithms typically consist of three components: representation, evaluation, and optimization. Explain these three components. Also, choose one specific learning algorithm and illustrate what these components look like in that algorithm.

> What is the 'curse of dimensionality' and what is the 'blessing of non-uniformity'? How does it affect learning algorithms and what can we do about it?

> What is data leakage and how can you avoid it?

## Linear models

> Why is regularization important in linear models? Which are the main techniques for doing this? Give a short description for each.

> Explain the difference between L1 and L2 regularization. How would you select between the two?

> How does gradient descent update your model parameters (weights)? What is the role of the learning rate?

> Explain (in your own words) how mini-batch stochastic gradient descent optimization works. What can you do to avoid getting stuck in a local minimum?

> How can you make normal stochastic gradient descent more smooth?

> What are the main ways to make a linear model overfit less?

> How does Lasso regression optimize model weights? What is the role of the regularization parameter in this?

> Why does L1 regularization lead to sparse models? Why does L2 regularization not have that property?

> What is Elastic Net regularization?

> How can you detect that a model is underfitting or overfitting? Explain at least 2 different approaches.

> Explain in your own words how logistic regression works. Give the formula for the logistic function and explain how it is used.

> What is cross-entropy loss and how can you optimize it? Give at least 3 different techniques.

> Name 2 possible loss functions for logistic regression and explain the main difference.

> Say that you want to train a linear SVM on one dataset with many instances with few features and another with few instances and many features. Do you solve the primal or the dual optimization problem?

> Explain the similarities and differences between SVMs and the k Nearest Neighbor algorithm.

> How do you regularize a linear SVM? Which hyperparameter can you use for that and what is its role?

> What happens to the number of support vectors when I increase the C hyperparameter of the SVM algorithm?

> What is a Least Squares SVM and how is it different from normal SVMs? What are other types of generalized SVMs?

> How do linear models perform multi-class classification?

> What is a perceptron?

## Kernelization

> What is a feature map (also known as a basis expansion)? When do you want to use it?

> What is the reproducing kernel Hilbert space of a given feature map?

> Explain in your own words what 'kernelization' means. What is the 'kernel trick' and when can we use it?

> What is a kernel? Explain its role in the context of SVMs.

> What is a kernel matrix? How can you use it in SVMs or other kernelized methods?

> What is the difference between local kernels and global kernels? Give an example of each.

> Given that you use an RBF kernel, how can you control it to make your model underfit or overfit less?

> What are generalized linear models (GLM's)? Give some examples of non-linear models that fall in this category. 

> Explain in your own words what the Representer Theorem is (no formulas need). What does it allow us to do?

> How does kernelized Ridge work?

## Model Selection

> Why do we need to use cross-validation on smaller datasets? Explain the approach and the main advantages.

> You have a dataset collecting multiple measurements from multiple people. How should you create train-test splits to evaluate algorithms trained on this data?

> When do you use stratified cross-validation and why is it important?

> How does bias-variance decomposition work? What is its relationship to overfitting? You don't need to give the exact formula's.

> What can you do when you observe that your model is overfitting? Give at least 4 approaches.

> What is the difference between a type 1 error and type 2 error in binary classification?

> Explain precision, recall, and F1-score. When would you use each of these metrics?

> Imagine that you want to compute precision (or recall) on a dataset with 10 classes. Which options do you have to aggregate the per-class results?

> When should you use micro-averaging of a binary evaluation metric? When should you use macro-averaging?

> What is threshold calibration? How do you use it to minimize false negative predictions?

> What is a precision-recall curve and how do you use it for model selection?

> What are the benefits of choosing AUC (Area under the ROC curve) over accuracy?

> How can you use ROC curves to optimize a model's predictions for a given false positive / false negative tradeoff?

> How can you give a certain class in your data more importance? How can you make sure that learning algorithms indeed give more importance to that class during training?

> How can you give a certain group of data points in your data more importance? How can you make sure that learning algorithms indeed give more importance to these examples during training?

> Say that different misclassifications have a different real-world cost. How can you optimize machine learning models so that they minimize this cost? Name 3 different ways to do so.

> If you have a method that produces class probabilities (e.g. logistic regression). How can you measure that these probabilities are actually correct? Note that we are looking for an evaluation metric, not a loss function. How is this metric computed?

> What is model calibration? Why is it important? Name 2 methods to calibrate models after training.

> How can we measure that a model is under- or overfitting using bias-variance analysis?

> When do you use nested cross-validation

## Ensemble methods

> Explain in your own words how the RandomForest algorithm works. Explain what the main hyperparameters do. How does it perform classification and regression?

> What is the out-of-bag error of a RandomForest and how do you compute it? What is the benefit over cross-validation?

> Explain in your own words how adaptive boosting (AdaBoost) works. How does it update the instance weights after every iteration? How are instance weights computed and how are they passed to the next iteration?

> Explain in your own words how gradient boosting works (you do not need to give the exact formulas). Why is it called an 'additive' model?

> What is the effect of the learning rate (a.k.a. shrinkage) in gradient boosting?

> How is the XGBoost algorithm different from normal gradient boosting. Name 3 important differences.

> What is stacking and what is cascade stacking? Explain the difference.

> Bagging is known as a variance-reduction technique while Boosting is known as a bias-reduction technique. Explain what this means and how it effects the choice of base-learning you use (e.g. the depth on the decision trees).

# Data preprocessing

> When should you scale your input data? For which algorithms is it needed and why does it help?

> Which scaling techniques could you use when you know that your data may have outliers?

> What are power transformations of numerical features and when would you use them?

> Explain in your own words how target encoding works.

> How can you measure whether a feature (variable) is informative for making predictions? Give at least 3 approaches.

> How does iterative model-based feature selection work?

> What are forward and backward feature selection? Explain how they work.

> What is permutation feature importance? How do you compute it and what are the benefits compared to model-based techniques such as Random Forest-based feature importance?

> There are 3 types of missing values. Name them and explain the difference.

> How does kNN-based missing value imputation work?

> How does the MICE technique impute missing values?

> Name at least 4 techniques to resample your training data if your classes are imbalanced.

> If your classes are imbalanced you could resample your training data. What are two *other> techniques to 'correct' class imbalance?

> What is the SMOTE algorithm and how does it work?

# Neural Networks

> Why are layered neural networks easier to train than large non-layered networks?

> What are typical tensor operations in dense (feed-forward) neural networks? What do they do with the input data?

> Why is it important that objective functions and activation functions are differentiable in training neural nets?

> A neural network node has multiple inputs and an activation function. Given that we measure a certain loss at the output of the neuron, how can we compute the gradient for the weight of a single input?

> How does a neural net update the weights of connections deep inside in the neural net when the loss is only measured in the output layer?

> What is the role of an activation function in a neural network? Give a few examples.

> Which activation function do you use in the output layer of a classification problem? Explain why. What do you use for regression problems?

> What is the main difference between the tanh and ReLU activation function? What are their benefits and drawbacks?

> What is weight initialization in neural networks and why is it important?

> What are typical loss functions for classification and regression in neural networks? What do they measure?

> What is learning rate decay and why is it useful?

> How do cyclical learning rate schedules work?

> Explain in yout own works what learning rate momentum is. What is Nesterov momentum?

> Explain in your own words what the RMSprop algorithm is and how it works.

> Explain in your own words what the Adam optimizer is and how it works.

> What are early stopping, L2 regularization and dropout? Explain what they do.

> Explain in your own words how dropout helps avoid overfitting in neural networks.

> What is information bottleneck in the context of neural networks?

> Explain at least four ways to avoid that a neural net overfits the training data. Explain how you use them in practice.

> Batch normalization allows us to train deeper networks. Explain why.

> What are exploding gradients and vanishing gradients? How can we avoid them?

# Convolutional Neural Networks

> How does a convolutional neural layer work? What is the input, what is the output, and how is the data transformed?

> What is max-pooling? How does it work and why do we need it? Where do we add it in a neural architecture?

> What is a typical structure for a convolutional neural net for classification? Which layers do you use, in which order, and why?

> Explain how convolutional neural nets specifically can be used to learn from small image datasets. Which aspects (at least 2) of convolutional neural nets make it inherently more efficient for image data, and which additional techniques (at least 2) can you use to overcome overfitting on a small image dataset?

> What is data augmentation and how do you use it to train neural nets?

> How do you initialize the filters (channels) in a convolutional layer? How do you optimize them and what do they learn?

> Explain how convolutional neural nets learn spacial hierarchies of patterns in visual data. Give an example of what this typically looks like.

> How can you pre-train a neural network? Discuss at least 3 approaches and explain how they work and why they yield better models.

# Neural Networks for text

> Explain what a bag-of-words representation is. Explain the key benefits and drawbacks.

> Which are the most common preprocessing steps one needs to go through to convert text to a bag-of-words representation?

> Which scaling operations are useful on text that is represented as a bag-of-words?

> Explain in your own words what a word embedding is. 

> How is it possible to transfer a pre-trained word embedding to a new neural network? Which weights are transferred and how?

> Explain two variants of the Word2Vec embedding and how they are trained.

> What is FastText? How does it work and what is it used for?

> Explain how a GloVe word embedding is computed. 

> How can you compute the similarity of two documents using text embeddings? 

> How can you use word embeddings in a neural network without losing the ordering of words in the text? Name at least two approaches to do this.

> Explain how a 1D convolutional layer works and how it is used to analyse text?
