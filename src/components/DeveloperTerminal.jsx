import React, { useState, useRef, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import './DeveloperTerminal.css';

export default function DeveloperTerminal() {
  const { personal, skills, projects } = portfolioConfig;

  // History entries state (command outputs displayed beneath the input)
  const [entries, setEntries] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [draftInput, setDraftInput] = useState('');

  const inputRef = useRef(null);
  const historyAreaRef = useRef(null);

  // Auto-scroll output area to newest output when entries change
  useEffect(() => {
    if (historyAreaRef.current) {
      historyAreaRef.current.scrollTop = historyAreaRef.current.scrollHeight;
    }
  }, [entries]);

  // Focus terminal input when clicking anywhere inside the terminal window
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Command parser & executor - strictly handles only the 6 supported commands
  const executeCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();

    // Add to command navigation history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // 1. CLEAR command - clears history output beneath input
    if (cmd === 'clear') {
      setEntries([]);
      setInputVal('');
      return;
    }

    let outputContent = null;
    let isError = false;

    // 2. HELP command
    if (cmd === 'help') {
      outputContent = (
        <div className="term-help-output">
          <p className="term-output-title">Available commands:</p>
          <div className="term-help-grid">
            <div className="term-help-item"><span className="term-cmd-name">help</span><span>List all supported commands</span></div>
            <div className="term-help-item"><span className="term-cmd-name">about</span><span>Concise academic & engineering introduction</span></div>
            <div className="term-help-item"><span className="term-cmd-name">skills</span><span>Technical languages, frameworks & database skills</span></div>
            <div className="term-help-item"><span className="term-cmd-name">projects</span><span>Current featured development projects</span></div>
            <div className="term-help-item"><span className="term-cmd-name">contact</span><span>Configured email, LinkedIn & GitHub channels</span></div>
            <div className="term-help-item"><span className="term-cmd-name">clear</span><span>Clear the terminal display</span></div>
          </div>
        </div>
      );
    }
    // 3. ABOUT command
    else if (cmd === 'about') {
      outputContent = (
        <div className="term-about-output">
          <p className="term-bold-name">{personal.fullName}</p>
          <p className="term-text-line">B.Tech Computer Science and Engineering student at KL University (CGPA 9.5).</p>
          <p className="term-text-line">Passionate about software development, full-stack architectures, data science, and AI/ML.</p>
          <p className="term-text-line">Focused on building practical, useful software experiences and solving real-world engineering problems through code.</p>
        </div>
      );
    }
    // 4. SKILLS command
    else if (cmd === 'skills') {
      outputContent = (
        <div className="term-skills-output">
          <p className="term-output-title">Technical Skillset:</p>
          <ul className="term-tree-list">
            <li>
              <span className="term-branch-cat">Programming:</span> {skills.programming.map((s) => s.name).join(', ')}
            </li>
            <li>
              <span className="term-branch-cat">Web Development:</span> {skills.webDevelopment.map((s) => s.name).join(', ')}
            </li>
            <li>
              <span className="term-branch-cat">Databases:</span> {skills.databases.map((s) => s.name).join(', ')}
            </li>
            <li>
              <span className="term-branch-cat">Tools & Workflow:</span> {skills.tools.map((s) => s.name).join(', ')}
            </li>
            <li>
              <span className="term-branch-cat">Additional Focus:</span> {skills.additionalInterests.map((s) => s.name).join(', ')}
            </li>
          </ul>
        </div>
      );
    }
    // 5. PROJECTS command (strictly only Handloom Web Application & Global Loom Collective)
    else if (cmd === 'projects') {
      outputContent = (
        <div className="term-projects-output">
          <p className="term-output-title">Featured Projects (2):</p>
          <div className="term-projects-list">
            {projects.map((proj, idx) => (
              <div key={proj.id} className="term-project-block">
                <div className="term-proj-header">
                  <span className="term-proj-idx">[{idx + 1}]</span>
                  <span className="term-proj-title">{proj.title}</span>
                  <span className="term-status-tag">Status: {proj.status || 'In Development'}</span>
                </div>
                {proj.role && <div className="term-proj-detail"><span className="term-detail-key">Role:</span> {proj.role}</div>}
                <div className="term-proj-detail"><span className="term-detail-key">Technologies:</span> {proj.technologies.join(', ')}</div>
                <div className="term-proj-detail"><span className="term-detail-key">Description:</span> {proj.shortDescription}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    // 6. CONTACT command
    else if (cmd === 'contact') {
      const email = personal.contact.email;
      const linkedin = personal.contact.linkedin;
      const github = personal.contact.github;

      outputContent = (
        <div className="term-contact-output">
          <p className="term-output-title">Configured Contact Channels:</p>
          <div className="term-contact-list">
            <div className="term-contact-item">
              <span className="term-contact-label">Email:</span>
              {email ? (
                <a href={`mailto:${email}`} className="term-link">{email}</a>
              ) : (
                <span className="term-not-configured">Not configured yet</span>
              )}
            </div>
            <div className="term-contact-item">
              <span className="term-contact-label">LinkedIn:</span>
              {linkedin ? (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="term-link">{linkedin}</a>
              ) : (
                <span className="term-not-configured">Not configured yet</span>
              )}
            </div>
            <div className="term-contact-item">
              <span className="term-contact-label">GitHub:</span>
              {github ? (
                <a href={github} target="_blank" rel="noopener noreferrer" className="term-link">{github}</a>
              ) : (
                <span className="term-not-configured">Not configured yet</span>
              )}
            </div>
          </div>
        </div>
      );
    }
    // Unsupported commands (strictly includes whoami, date, and any other command)
    else {
      isError = true;
      outputContent = (
        <div className="term-error-output">
          <span>Command not found: <span className="term-invalid-cmd">{trimmed}</span>. Type <button type="button" className="term-inline-btn" onClick={() => executeCommand('help')}>'help'</button> to see available commands.</span>
        </div>
      );
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `entry-${Date.now()}-${Math.random()}`,
        command: trimmed,
        output: outputContent,
        isError,
      },
    ]);

    setInputVal('');
  };

  // Keyboard navigation for history (Up/Down arrows) and submission (Enter)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      if (historyIndex === -1) {
        setDraftInput(inputVal);
        const lastIndex = commandHistory.length - 1;
        setHistoryIndex(lastIndex);
        setInputVal(commandHistory[lastIndex]);
      } else if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal(draftInput);
      }
    }
  };

  // Quick command chip click handler
  const handleChipClick = (cmd) => {
    executeCommand(cmd);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="terminal-section" id="terminal" aria-label="Interactive Developer Terminal">
      <div className="container">
        <h2 className="section-title">
          Developer <span className="highlight">Terminal</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: '3.5rem' }}>
          Explore my background, skills, and projects through a lightweight interactive shell.
        </p>

        {/* Terminal Window Container */}
        <div className="terminal-window" onClick={handleTerminalClick}>
          {/* Terminal Title Bar */}
          <div className="terminal-titlebar">
            <div className="terminal-controls">
              <span className="term-dot dot-close" aria-hidden="true"></span>
              <span className="term-dot dot-minimize" aria-hidden="true"></span>
              <span className="term-dot dot-maximize" aria-hidden="true"></span>
            </div>
            <div className="terminal-title-text">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              <span>visitor@varshini: ~ (bash)</span>
            </div>
            <div className="terminal-actions-right">
              <button
                type="button"
                className="term-clear-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand('clear');
                }}
                title="Clear Terminal Display"
                aria-label="Clear terminal"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Terminal Screen Body - Normal top-to-bottom layout */}
          <div className="terminal-body" role="log" aria-live="polite">
            {/* 1. Welcome Message Banner at Top */}
            <div className="term-welcome-msg">
              <p className="term-system-line">Varshini Developer Terminal v1.0.0 [x86_64-portfolio]</p>
              <p className="term-hint-line">
                Type <span className="term-cmd-highlight">'help'</span> to see all supported commands, or click the shortcuts below.
              </p>
            </div>

            {/* 2. Active Command Prompt Line - Positioned at top-left directly below welcome message */}
            <div className="term-active-line">
              <label htmlFor="terminal-command-input" className="term-prompt">
                <span className="term-user">visitor@varshini</span>
                <span className="term-colon">:</span>
                <span className="term-path">~</span>
                <span className="term-dollar">$</span>
              </label>
              <div className="term-input-wrapper">
                <input
                  id="terminal-command-input"
                  ref={inputRef}
                  type="text"
                  className="terminal-real-input"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-label="Terminal command prompt input. Type help to see available commands."
                />
                <span className="terminal-blinking-cursor" aria-hidden="true"></span>
              </div>
            </div>

            {/* 3. Command History & Output Area - Renders beneath the command prompt */}
            {entries.length > 0 && (
              <div className="term-history-area" ref={historyAreaRef}>
                {entries.map((entry) => (
                  <div key={entry.id} className="term-entry">
                    {entry.command && (
                      <div className="term-command-line">
                        <span className="term-prompt">
                          <span className="term-user">visitor@varshini</span>
                          <span className="term-colon">:</span>
                          <span className="term-path">~</span>
                          <span className="term-dollar">$</span>
                        </span>
                        <span className="term-input-echo">{entry.command}</span>
                      </div>
                    )}
                    {entry.output && (
                      <div className={`term-output-wrapper ${entry.isError ? 'is-error' : ''}`}>
                        {entry.output}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Clickable Quick Command Shortcuts */}
        <div className="terminal-shortcuts-row">
          <span className="shortcuts-label">Click to run:</span>
          {['help', 'about', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="term-shortcut-chip"
              onClick={() => handleChipClick(cmd)}
            >
              <code>{cmd}</code>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
