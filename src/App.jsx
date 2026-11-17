import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select a episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
              onClick={() => setSelectedEpisode(episode)}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <div className="app">
      <h1>Dark Echoes</h1>

      <div className="content">
        <EpisodeList />
        <EpisodeDetails />
      </div>
    </div>
  );
}
