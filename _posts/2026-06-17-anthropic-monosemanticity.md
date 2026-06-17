---
layout: post
title: "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning"
date: 2026-06-17
tags: [papers]
authors: Anthropic 2023
description: Using sparse autoencoders to learn monosemantic features of activations of a one-layer transformer.
---

{% include image.html 
   url="/assets/img/posts/superposition.png" 
   description="Superposition in Neural Networks" 
   caption="Superposition in Neural Networks." 
   height="50vh" %}

## Summary
The paper introduces the idea of sparse autoencoders for mechanistic interpretability. The main problem is that neuron activations can be polysemantic, which means that they can activate for distinct reasons that are distinct from each other. The theory behind this is superposition, where there are less neurons to represent all possible features and it relies on a linear combination of neuron activations to represent features in high dimensional space.

Sparse autoencoders (SAEs) aim to create an overcomplete representation of each token, so that we can create a sparse representation of an contextual embedding that is taken at a layer of a transformer. The paper hooks on the activations of the MLP, as it theorizes that the MLP activations represent the contextual information more. Other future work hook onto the activations of the residual stream. 

The paper also experiments with the number of dimensions of the autoencoder representation, ranging from 1x the model size to 256x the model size. 

## Key Ideas
- Sample token activations from the MLP at a desired layer in the model. The paper uses a one layer transformer, but SAEs in general can only be trained and tested on one layer in practice.
- Train an unsupervised autoencoder that reconstructs the token activations.
- Instead of the autoencoder creating a bottleneck, the autoencoder creates an overcomplete representation to recreate the original activation.
- The unsupervised method allows for many samples to be used. Usual reconstruction loss is used for training, along with a L1 penalty term that aims to push weights to 0, creating a sparse representation.
- The dictionary can then be used as a method of steering the output of the model. It provides advantages over finetuning and in context learning as it doesn't need to adjust the weights permanently and doesn't need to add tokens to the context. 

## My Thoughts
- Pretty cool paper that provided a lot of knowledge on interpretability.
- Sparse autoencoders are cool because I never thought about d_bottleneck >= d_input?


## Links

- [Paper](https://transformer-circuits.pub/2023/monosemantic-features)
