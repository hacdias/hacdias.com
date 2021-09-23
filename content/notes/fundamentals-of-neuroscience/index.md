---
title: Fundamentals of Neuroscience
lastmod: 2021-09-23T13:59:51.192451917Z
math: true
---

## Neuron

**Neurons** are the individual cellular unit in the nervous systems.

![Neuron](/images/neuron.png)

- **Axon terminals** connect to dendrites.
- **Dendrites** receive **input** signals.
- Cell body = Soma

There are different ions that play highly important roles in the neurons, such as $\ce{Cl-, Na+, K+, Ca^2+}$. They can be moved between the intercellular and extracellular space through different mechanisms:

- **Diffusion:** particles move to make concentrations uniform on both sides.
- **Electrostatic**: same charge repel, different charge attract.

Besides these two mechanisms, there are sodium and potassium pumps that require ATP to work (energy).

Neurons have different types of **ion channels**:

- **Passive**, that allow for steady changes to happen.
- **Active**, that open, close and inactivate depending on the membrane potential. The membrane potential changes the probability of something to happen to the channel, but it does not determine it fully. Kinetics also play a role.
  - $\ce{Na+}$ open and close fast.
  - $\ce{Na+}$ inactivation is slow.
  - $\ce{K+}$ open and close slow.
  - The **kinetics** is related to the probabilistic temporal dynamics of moving between different states.

The membrane acts as a [Capacitor](/notes/physics/#capacitor) and thus causes voltage to change gradually. If a membrane has a higher capacitance, it has a greater ability to build up charges on its two sides and so it will take longer for the membrane voltage to change. Similarly, if the capacitance is lower, the membrane voltage will change more quickly. We will return to this point with the idea of a ‘time constant’ later in this lesson.

- The voltage across the membrane is measured relatively to the extracellular space.
- **Membrane potential**: [Voltage](/notes/physics/#voltage) across the membrane at any point in time; can vary from -90 mV to +60mV.
- **Membrane resistance**: [Resistance](/notes/physics/#resistance) to the flow of ions across membrane; generally represented in Ohms per square mm.
- **Axial resistance**: resistance to the flow of ions down the axon.
- **Resting potential**: membrane potential of a neuron that is "at rest", i.e., not sending or receiving signals; usually between -60 mV and -70 mV.

A cell can be either **depolarized** or **hyperpolarized**. These terms are compared to the resting potential, thus:

- A cell is **depolarized** when there is a positive change in the membrane potential, i.e., it's less negative.
- A cell is **hyperpolarized** when there is a negative change in the membrane potential, i.e., more negative.

A neuron's axon is covered by myelin sheaths, having regular gaps between them, called **nodes of Ranvier**. These sheaths cause a condition called **saltatory conduction** increasing the conduction velocity of action potentials.

## Action Potential

An **action potential** happens when the membrane potential of a specific neuron rapidly rises and falls.

![Action Potential](/images/action-potential.svg)

There are two **refractory periods**:

- **Absolute refractory period (ARP)**, when sodium voltage-gated channels become inactivated, they cannot be immediately opened again.
- **Relative refractory period (RRP)**: both sodium and potassium channels are open. Requires a stronger than usual stimulus to start a new action potential.

The action potential can be described in multiple phases.

- **Resting phase**
  - Membrane potential of  -64 mV
  - Voltage-gated $\ce{Na+}$ and $\ce{K+}$ channels closed
  - $\ce{Na+}$ and $\ce{K+}$ conductance is low
- **Rising phase**
  - Membrane potential rises after threshold is reached
  - Voltage-gated $\ce{Na+}$ channels are quick to open
  - $\ce{Na+}$ conductance is high
  - $\ce{Na+}$ flows into the cell
  - $\ce{K+}$ channels are slow to open
  - $\ce{K+}$ conductance remains low
- **Falling phase**
  - Membrane potential falls
  - Voltage-gated $\ce{K+}$ channels are opened
  - $\ce{K+}$ conductance is high
  - $\ce{K+}$ flows out of the cell
  - Voltage-gated $\ce{Na+}$ channels become inactivated
  - $\ce{Na+}$ conductance drops
  - Flow of $\ce{Na+}$ into the cell stops
- **Undershot phase**
  - Membrane potential becomes more negative than at rest
  - Voltage-gated $\ce{K+}$ channels begin to close
  - $\ce{K+}$ conductance falls
  - Flow of $\ce{K+}$ out of the cell begins to stop
  - Voltage gated $\ce{Na+}$ remain inactivated
  - $\ce{Na+}$ conductance is low
- **Recovery**
  - Voltage-gated $\ce{Na+}$ and $\ce{K+}$ channels are closed
  - $\ce{Na+}$ inactivation gate opens
  - $\ce{Na+}$ and $\ce{K+}$ conductance are low
  - Membrane potential gradually returns to baseline

## Synapses

Synapses can be grouped into different categories, depending on what we're comparing:

- **Fast vs. Slow**
- **Strong vs. Weak**
- **Electrical vs. Chemical**
  - Electrical are faster, bidirectional.
  - Chemical are more common, slower, more diverse and unidirectional.
- **Excitatory vs. Inhibitory**
  - Excitatory (**EPSPs**) increase the activity of the postsynaptic neuron.
    - Fast EPSPs are usually mediated by $\ce{Na+}$ ionotropic channels.
  - Inhibitory (**IPSPs**): decrease the activity of the postsynaptic neuron.
    - Usually mediated by $\ce{Cl-}$ ionotropic channels.
    - Can open $\ce{Cl-}$ channels
    - Can open $\ce{K+}$ channels
    - Can block $\ce{Ca^2+}$ channels
    - Common neurotransmitters:
      - **Glycine** in the spinal cord.
      - **GABA** in the mammalian brain.

### Electrical Synapses

### Chemical Synapse

1. An action potential travels down the axon, arriving at the presynaptic terminal.
2. The $\ce{Ca^2+}$ voltage-gated channels are opened, leading to an influx of $\ce{Ca^2+}$.
3. When depolarized, synaptic vesicles are fused with the presynaptic membrane resulting on the release of neurotransmitters or neural modulators into the synaptic cleft.
   1. This fusion happens by the action of the SNARE protein complex, generating a synaptic potential.
   2. The synaptic vesicles are high in synaptobrevin.
   3. The neurotransmitters are released presynaptically in quantized amounts because they're released in discrete amounts by vesicles.
4. Then, these molecules are passed through diffusion and connect to the receptors on the postsynaptic membrane.
   1. Receptors are usually made to bind certain specific molecules, allowing for greater customization and variety than electrical synapses.
5. Neurotransmitters may activate channels in the postsynaptic membrane leading to the generation of a postsynaptic potential.
6. After being released, 5 different things can happen to a neurotransmitter
   1. Travel across the synaptic cleft and bind to a dedicated receptor.
      1. To avoid leaving the neurotransmitter hanging there for too long:
         1. The receptor acn  be resorbed into the postsynaptic cell
         2. Neurotransmitters can be broken down by enzymes
         3. Neurotransmitters can be taken up by certain transport proteins.
         4. Combinations of the previous mechanisms.
      2. These parts can be recycled.

### Neuromodulation

The **efficacy** of a synapse can be changed by a **neuronal modulator**. They make a synapse with either a pre or post synaptic membrane.

- Can act in large areas of the nervous system all at once.
- Can act through:
  - More commonly via GPCRs
  - Voltage-gated ion channels.
- Can be presynaptically or postsynaptically or both.

**Neuropeptides** are proteins and are larger than classical neuromodulators. Act exclusively through GPCRs.
  - Pain perception is modulated by **opioids**.

---

- **Serotonin** system
- **Dopamine**: neuromodulator; produced in the brain; mesocortical, mesolimbic, nigrostriatal and tuberoinfundibular pathways;
  - *Substantia nigra* regulate movement, lost in Parkinson's Disease
  - L-DOPA can help producing dopamine, gradually becomes less and less effective
  - Reward behaviors, reinforcement learning, regulating movement
- Cholinergic system
  - Acetycholine
  - Muscle, motor control, arousal and short term memoryx

### Facts

- GABA is the major neurotransmitter for inhibition in the brain.
- GABA ad Glycine are inhibitors.
- Acetylcholine is broken down by acetylcholinesterase, a specific enzyme located in the synaptic cleft.
- **Vesicles** are recycled.
- Vesicles fusion:
  - The axon at the presynaptic terminal depolarizes.
  - Voltage-dependent calcium channels open.
  - Calcium concentration inside the presynaptic terminal increases.
  -  v-SNAREs and t-SNAREs are brought together by proteins.
  -  The vesicular and synaptic membranes fuse together.
- t-SNARE are found on the membrane of the presynaptic terminal.
- v-SNARE are found on the vesicle.
- SNAP-25 is a t-SNARE. Therefore, its cleavage by botulinum toxin impairs synaptic release. However, none of the other processes (acetylcholine synthesis, vesicle loading, changes in calcium concentration) would be affected.
- End Plate Potentials EPP
- Synaptic cleft has ~20-40 nanometers wide
- Neurotransmitter v~0.05 miles x hour
- **Shunting**: charged chlorine influx counterbalances the positively charged sodium influx of excitatory synapses. Canceling out.
- **Temporal summation**: two EPSPs simultaneously make a bigger EPSP although the amplitude is not the same as summing both amplitude.

## Neurotransmitter Receptors

There are different types of receptors:

- **Ionotropic receptors**: protein complexes that direct the coupling of the neurotransmitter receptor to an ion channel.
- **Metabotropic receptors**: when activated, leads to the activation of a secondary mechanism inside the cell.
  - Most common are **G-protein-couple receptors (GPCRs)**
    - There are over 2 000 GPCR genes in the human genome (~10% of all genes)
    - Transmembrane protein complex
    - Alpha, beta and gamma proteins (g-proteins) due to GTP
    - Versatile

### Glutamate Receptors

**Glutamate** is the main excitatory neurotransmitter of the central nervous system. Used in more than 90% of a human brain's synaptic connections.

There are two different ionotropic glutamate receptors:

- **AMPA**: fast excitatory postsynaptic receptors; promiscuous, i.e., permeable to all cations; ligand.
- **NMDA**: LTP; binds to NMDA receptors; used inn the learning and memory functions of the brain (synaptic plasticity); ligand and voltage-gated; they need AMPA receptors to open up.
  - LTP
  - Let's Cations pass through it (calcium mostly)
  - when at rest, receives mg+
  - when depolarized, repels mg+
  - AMPA open NMDA membranes

### Glycine Receptors

- **Ionotropic**.
- **Strychnine** is a powerful antagonist of the glycine receptor.

## Neural Networks

- **Convergence**: multiple inputs come together to synapse on a single neuron.
- **Divergence**: signal diverges to many places of the body.
- **Recurrance**: different recurrent patterns, in conjunction with convergence and divergence can create complex patterns. E.g.: Central Pattern Generators (CPG): rhythmic movements on fish's tail.

## Neural Plasticity

**Neural Plasticity** refers to the ability of a neural circuit to be shaped by experience. It happens all the time.

There is:

- **Short time plasticity**: acts on a timescale of milliseconds to minutes.
  - Synaptic facilitation: strengthening of synaptic connections.
  - Synaptic depression
- **Long time plasticity**: acts on a timescale of hours or more.
  - Long-term potentiation (LTP)
    - More neurotransmitters released
    - Increase number of receptors post synaptic
    - Make the postsynaptic receptors produce a larger effect
    - Hebbian or non-Hebbian
      - Non-hebbian
        - anti-hebbian-ltp, synapse weaks whe together
      - NMDAReceptor is hebbian
  - Long-term depression (LTD)
    - Hippocampus
      - related to glutamate
      - persistent weak synaptic stimulation
    - cerebellum
      - strong synaptic stimulation
- **Hebb's Rule**: cells that fire together, wire together. Neurons out of sync, lose their link.
- Associative Learning:
- Spike timing dependent plasticity
- Non-synaptic plasticity: not locally restricted to synapses. emerging field. modifications of ion channels.

## Brain
### Visual Information

- Eye
  - Photoreceptors are unevenly distributed across the retina
  - The retina processes the visual information before sending to the brain
  - The retina is organized into three function stages:
    - photoreception
      - photoreceptors
    - internal transmission
      - horizontal cells, amacrine cells
    - output
      - retina ganglial cells: produce action potentials
  - Output neurons of the retina: retinal ganglion cells
  - **Rods**: detect low light level
    - 498 nms
    - Used on scotopic (night) vision
  - **Cones**: high light level and colors
    - finer detail
    - rapid changes
    - S cones: blue light, 420 to 440 nm waves
    - M cones: green light, 535, 550
    - L cones: red light, 565 to  580 nm
    - GPCR protein photopsin, differs on each cone
    - Thricromat vision
    - There are tetrachromats animals (and humans :O)
    - photopic vision
  - 20:1 rods to cones
  - Photoreceptors do phototransduction
    - retinal + opsin = rhodopsin (form of vitamine A)
    - When a photon is absorbed by a retinal, the shape of the retinal changes from 11-cis retinal to all-trans retinal. Cis and Trans related to position
    - Photoreceptors hyperpolarize when light hits them, stopping the release of neurotransmitters when illuminated.
  - Receptive field
    - ON Center
    - OFF Center
  - Direct Pathway
    - OFF Bipolar cells
      - glutamate reaches bipolar cells and cell depolarizes
      - light off
    - ON bipolar cells
      - glutamante reaches , gpcrs cause cell to hyperpolarize
      - light on
  - Lateral Pathway
  - photoreceptors
    - dark, open ion channels = depolarizes
    - light, close ion channels = hyperpolarizes
  - retinofugal pathway
    - nerves cross (left to right, right to left)
    - In order:
      - optic nerve
      - optic chiasma
        - nerves from both eyes combine
      - optic tract
      - lateral geniculate nucleus (LGN)
        - About 80% of excitatory synapses found in the LGN come back from the visual cortex
        - dorsal lateral part of thalamus
        - left hemisphere processes right and vice-versa
        - 6 layers: parallell processing
        - koniocellular layers: color
      - Ventral pathwway (what):
        - Receptive field size and stimulus complexity increase
      - Dorsal pathway (where, how):
        - sensitivity to motion (MT), ocular dominance
      - optic radiation
      - visual cortex
        - 6 sheets of paper, 6 layers
        - Primary Visual Cortex (V1)
          - input: speicifc layers of structure
          - layer 4: magnocellullar and parvocellular input from lgn
          - 2 & 3 : koniocellular cells from lgn
          - edge detectors
    - retinotectal projection - tectum
    - accessory optic system
    - thalamus --> visual cortex
l
## Others

> Neuropeptides form a large family of neuromodulators. They are generated through the cleavage of larger proteins. Neuropeptides are usually 5-20 amino acids long, which is small for a peptide, but very large for a neuromodulator. As you learn more about neuropeptides, try to answer these questions:

## Formulae

- $T$ in Kelvin
- $R = 8.314$ J/K mol
- $F = 96.485$ C/mol

Formulas:

- [Ohm's Law](/notes/physics/)
- [Length Constant](/notes/physics/)
- [Time Constant](/notes/physics/)

## Nernst Potential

- Membrane potential at which, given certain conditions, a single ion is at an equilibrium.
- $E_{\ce{K+}}=-90$ mV
- $E_{\ce{Na+}}=55$ mV
- $E_{\ce{Cl-}}=-65$ mV

$$E_{ion}=\frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i}$$


## Driving Force

$$DF = V_{membrane}-E_{ion}$$
### GHK Equation

$$V_m=\frac{RT}{zF}\ln\frac{P_k[K]_o+P_{Na}[Na]_{o}+P_{Cl}[Cl]_i}{P_k[K]_i+P_{Na}[Na]_i+P_{Cl}[Cl]_{o}$$

## References

- https://nba.uth.tmc.edu/neuroscience/s1/introduction.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter01.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter02.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter04.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter05.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter06.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter08.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter10.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter11.html
- https://nba.uth.tmc.edu/neuroscience/s1/chapter13.html
- https://nba.uth.tmc.edu/neuroscience/s2/chapter01.html
